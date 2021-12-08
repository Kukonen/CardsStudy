import { Request, Response } from 'express';
const AuthModel = require('../Models/auth.model');
const User = require('../DataBase/User');

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
        return response.json("ok")
    }
}

module.exports = new ProfileController();