require('dotenv').config();
import { Request, Response } from 'express';
const AuthModel = require('../Models/auth.model');
const User = require('../DataBase/User');
const File = require('../DataBase/File');
const formidable = require('formidable');
const fs = require('fs');

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
        return response.json("ok")
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

            fs.rename(file._writeStream.path, filePath  + fileName, () => {});
            const lastAvatars = await File.find({userId: user.id, type:'avatar'});
            lastAvatars.forEach((lastAvatar:any) => {
                fs.unlink(filePath +lastAvatar.path, () => {})
            });
            await File.deleteMany({userId: user.id})
            await new File({id, userId: user.id, path: fileName, date, type: 'avatar'}).save();
            await User.findOneAndUpdate({email: user.email}, {avatar: fileName});
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