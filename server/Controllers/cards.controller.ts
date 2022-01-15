import {Request, Response} from "express";
const CardsModel = require("../Models/cards.model");
const UserModel = require("../Models/user.model");
const AuthModel = require('../Models/auth.model');

interface ITwoTokens {
    accessToken: string;
    refreshToken: string;
}

class CardsController {
    async saveCard(req: Request, res: Response) {
        let accessToken:string = req.cookies.accessToken;
        let refreshToken:string = req.cookies.refreshToken;

        const authtor = await UserModel.getUserIdByAccessToken(accessToken);

        if (!(typeof authtor === "string")) {
           return res.status(401).json();
        }

        const {
            id,
            number,
            title,
            text,
            type,
            content,
            points
        } = req.body;


        CardsModel.saveCard({
            id,
            authtor,
            number,
            title,
            text,
            type,
            content,
            points
        });
    }
}

module.exports = new CardsController();