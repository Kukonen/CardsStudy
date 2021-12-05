import { Request, Response } from 'express';
const AuthModel = require('../Models/auth.model');
const bcrypt = require('bcrypt');
import {IUser} from '../DataBase/User';

class AuthController {
    async register(request:Request, response:Response) {
        const {name, email, password} = request.body;

        let createStatus = false;

        await AuthModel.createUser(name, email, password).then((status:boolean) => {
            createStatus = status;
            console.log(createStatus)
        })

        if (createStatus) {
            const {accessToken, refreshToken} = AuthModel.generateTokens();
            response.cookie('accessToken', accessToken, {httpOnly: true})
            response.cookie('refreshToken', refreshToken, {httpOnly: true})
            return response.status(201).json({
                name,
                avatar: undefined,
                role: 'user'
            })
        } else {
            return response.status(400).json({
                description: "user with this email already created"
            });
        }
    }

    async login(request:Request, response:Response) {

        const {email, password} = request.body;

        let user:IUser = {
            id: "",
            name: "",
            email: "",
            password: "",
            role: "",
            avatar: undefined,
            accessToken: "",
            refreshToken: "",
        };

        await AuthModel.getUserByEmail(email).then((retrievedUser:IUser) => {
            user = retrievedUser
        }).catch(() => {
            return response.status(400).json({
                discription: "user not found"
            })
        });

        const paswordMatch = await bcrypt.compare(password, user.password);

        if (paswordMatch) {
            response.cookie('accessToken', user.accessToken, {httpOnly: true})
            response.cookie('refreshToken', user.refreshToken, {httpOnly: true})
            return response.status(200).json({
                name: user.name,
                avatar: user.avatar,
                role: user.role
            })
        } else {
            return response.status(400).json({
                discription: "passwords does not match"
            })
        }
    }

    async checkUserStatus(request:Request, response:Response) {
        let accessToken:string = request.cookies.acessToken;
        let refreshToken:string = request.cookies.refreshToken;

        AuthModel.checkAndUpdateToken(accessToken, refreshToken).then((responseAccessToken: string, responseRefreshToken: string) => {
            response.cookie('accessToken', responseAccessToken, {httpOnly: true})
            response.cookie('refreshToken', responseRefreshToken, {httpOnly: true})
            accessToken = responseAccessToken;
            refreshToken = responseRefreshToken;
        }).catch((e: string) => {
            if (e === "User unauthorized") {
               return response.status(401);
            } else {
                return response.status(400);
            }
        })
    }
}

module.exports = new AuthController();