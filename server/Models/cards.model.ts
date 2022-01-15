import {ICard, SendCard} from "../Interfaces/Cards";
const Templates = require('../DataBase/Templates');

interface SendCardModelData extends SendCard {
    authtor: string;
}

interface SendCardModelResponse {
    status: "ERROR" | "OK";
    description?: string;
}

class CardsModel {

    public static async saveCard(saveCardData:SendCardModelData):Promise<SendCardModelResponse> {
        // number given with -1
        const {id, authtor, title, text, type, content, points, number} = saveCardData;

        const Cards = await Templates.findOne({authtor});

        if (!Cards) {
            if (number !== 0) {
                return {
                    status: "ERROR",
                    description: "No found cards and number new card isn't 1"
                }
            }
            console.log("here")

            await new Templates({
                id,
                authtor,
                title : "",
                cards: [{
                    title,
                    text,
                    type,
                    content,
                    points
                }]
            }).save();

            return {
                status: "OK"
            }
        }

        console.log(Cards.cards.length < number + 1)

        if (Cards.cards.length < number + 1) {
            Cards.cards.push({
                title,
                text,
                type,
                content,
                points
            })
        } else {
            Cards.cards[number] = {
                title,
                text,
                type,
                content,
                points
            }
        }

        await Templates.updateOne({authtor}, {cards: Cards.cards});

        return {
            status: "OK"
        }
    }
}

module.exports = CardsModel;