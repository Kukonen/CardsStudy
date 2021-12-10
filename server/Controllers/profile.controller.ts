require('dotenv').config();
import { Request, Response } from 'express';

const AuthModel = require('../Models/auth.model');

const User = require('../DataBase/User');
const File = require('../DataBase/File');
const ChangePassword = require('../DataBase/ChangePassword');

const formidable = require('formidable');
const fs = require('fs');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

class ProfileController {
    async changeName(request:Request, response:Response) {
        const {name} = request.body;

        const accessToken:string = request.cookies.accessToken;
        const refreshToken:string = request.cookies.refreshToken;

        try {
            AuthModel.checkAndUpdateToken(accessToken, refreshToken);
        } catch {
            return response.status(401).json("tokens are not valid");
        }
        
        await User.findOneAndUpdate({accessToken: accessToken}, {name: name}).then(() => {
            return response.status(200).json(name);
        })
    }

    async changePassword(request:Request, response:Response) {
        const { password } = request.body;

        const accessToken:string = request.cookies.accessToken;

        const user = await User.findOne({accessToken});

        if (!user) {
            return response.status(401);
        }

        await ChangePassword.deleteMany({userId: user.id}); // delete all last password changes requests

        const id = AuthModel.getRandomString(8);
        const salt =  await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const path = AuthModel.getRandomString(15);

        const date = new Date().getTime();

        await new ChangePassword({id, userId: user.id, password: hashPassword, path, date}).save()

        try {
            let message = {
                from: `${process.env.EMAIL}`,
                to: user.email,
                subject: "CardsStudy",
                html: `
                <h3>Hello, ${user.name}.</h3>
                <br/>
                <p>If you haven't changed your password recently, follow <a href="${process.env.SERVERPATH}profile/changepassword/${path}" />this link</a>!</p>
                `
            };

            let transporter = nodemailer.createTransport({
                    host: "smtp.mail.ru",
                    port: 465,
                    secure: true,
                    auth: {
                        user: `${process.env.EMAIL}`,
                        pass: `${process.env.EMAIL_PASSWORD}`
                    }
                });

                await transporter.sendMail(message).then(() => {
                    return response.status(200).json();
                }).catch(() => {
                    return response.status(400);
                })

        } catch {
                return response.status(400);
        }
    }

    async changePasswordCheck(request:Request, response:Response) {
        const id = request.params.id;

        const changePasswordFromDB = await ChangePassword.findOne({path: id});

        console.log(id)

        if (!changePasswordFromDB) {
            return response.status(400).redirect(process.env.SITEPATH as string);
        }

        let timeOfLostPasswordChangeOption = new Date().getTime() - 43200000; // time to change password is 12 hours

        if (changePasswordFromDB.date < timeOfLostPasswordChangeOption) {
            await ChangePassword.deleteOne({id: changePasswordFromDB.id});
            return response.status(400).redirect(process.env.SITEPATH as string);
        }

        await User.findOneAndUpdate({id: changePasswordFromDB.userId}, {password: changePasswordFromDB.password});
        await ChangePassword.deleteOne({id: changePasswordFromDB.id});

        return response.status(200).redirect(process.env.SITEPATH as string);

    }

    async changeAvatar(request:Request, response:Response) {

        const accessToken:string = request.cookies.accessToken;
        const user = await User.findOne({accessToken});

        const id = AuthModel.getRandomString(8);

        if (!user) {
            return response.status(401);
        }

        const form = formidable({multiples: true});
        let file:any = null;
        let userInformation = {};
        let fileName = AuthModel.getRandomString(14);

        await new Promise((resolve, reject) => {
            form.parse(request, (err:any, fields:any, files:any) => {
                if (err) {
                    reject(() => console.log(err));
                    return;
                }
                userInformation = JSON.parse(JSON.stringify(fields));
                file = files.file
                resolve(file.name)
            })
        }).then(async () => {

            let date:any = new Date();
            date = date.getTime() as string;

            if (file) {
                fileName = fileName + '.jpg';
            }

            const filePath = process.env.FILE_PATH;

            fs.rename(file._writeStream.path, filePath  + fileName, () => {}); // transfer new avatar to static folder 

            const lastAvatars = await File.find({userId: user.id, type:'avatar'}); // delete all last user's avatar's file
            lastAvatars.forEach((lastAvatar:any) => {
                fs.unlink(filePath +lastAvatar.path, () => {})
            });

            await File.deleteMany({userId: user.id}) // delete all last user's avatar's in db

            await new File({id, userId: user.id, path: fileName, date, type: 'avatar'}).save(); // create new avatar's file link in db

            await User.findOneAndUpdate({email: user.email}, {avatar: fileName}); // change avatar link in user db

            return response.status(200).json(fileName);
        })
    }

    async getUserData(request:Request, response:Response) {
        const accessToken:string = request.cookies.accessToken;
        const user = await User.findOne({accessToken});

        if (user) {
            return response.status(200).json({
                name: user.name,
                avatar: user.avatar,
                role: user.role
            });
        } else {
            return response.status(401);
        }
    }
}

module.exports = new ProfileController();