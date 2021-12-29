export interface ICards {
    id: string;
    authtor: string;
    title: string;
    cards: ICard[];
    likes: string[];
    comments: ICardsComments[];
    results: ICardsResults[];
}

export interface ICard {
    id: string;
    title: string;
    text: string;
    type: CardTypes;
    content: ICardContentBlock2 | ICardContentBlock4 | ICardContentText;
    points: number;
}

interface ICardContentBlock2 extends I2Block {
    id: string;
}

interface ICardContentBlock4 extends I4Block {
    id: string;
}

interface ICardContentText {
    id: string;
    correct: string;
}

export interface I2Block {
    block1: string;
    block2: string;
    correct: 1 | 2;
}

export interface I4Block {
    block1: string;
    block2: string;
    block3: string;
    block4: string;
    correct: 1 | 2 | 3 | 4;
}

export interface ICardsComments {
    id: string;
    authtor: string;
    text: string;
    likes: string[];
    comments: ICardsComments[];
}

export interface ICardsResults {
    id: string;
    title: string;
    text: string;
    points: number;
}

export type CardTypes = "blocks2" | "blocks4" | "text";


class CardsModel {
    public static loadCards():null | ICards {
        // TODO add server connect and add cards from server

        const Cards:ICards = JSON.parse(localStorage.getItem('cards') as string);

        if (!Cards) {
            const newCards = {
                title: "",
                cards: {}
            }

            localStorage.setItem('cards', JSON.stringify(newCards));

            return null;
        }

        return Cards;
    }

    public static saveCard(title:string, text:string, type:CardTypes, answer:string | I2Block | I4Block | undefined, points:number, currentCard:number) {
        const Cards:ICards = JSON.parse(localStorage.getItem('cards') as string);

        currentCard = currentCard - 1;

        const contentId = Cards.cards[currentCard] ?
            Cards.cards[currentCard].id :
            this.generateRandomStringByLength(5);

        const cardId = Cards.cards[currentCard] ?
            Cards.cards[currentCard].id :
            this.generateRandomStringByLength(5);

        const content = Object({id: contentId, answer});

        Cards.cards[currentCard] = {
            id: cardId,
            title,
            text,
            type,
            content,
            points
        };

        localStorage.setItem('cards', JSON.stringify(Cards));
    }

    public static checkCanCreateCard(title:string, text:string, type:CardTypes, answer:string | I2Block | I4Block | undefined, points:number):boolean {

        /*
            This function check card for empty
         */

        // TODO MAKE CHECK MANY CARDS

        if (title && text && type && answer && points) {

            if (type === "text" && answer === "") {
                return false;
            }

            for (let key in Object(answer)) {
                if (Object(answer)[key] === "") {
                    return false;
                }
            }


        } else {
            return false;
        }

        return true;
    }

    public static generateRandomStringByLength(length:number):string {
        const symbols = "qwertyuiopasdghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";

        let randomString = "";

        for (let i = 0; i < length; ++i) {
            const randomIndex = Math.floor(Math.random() * symbols.length - 1);
            randomString += symbols[randomIndex];
        }

        return randomString;
    }

    public static changeTitle(title:string) {
        const Cards:ICards = JSON.parse(localStorage.getItem('cards') as string);

        Cards.title = title;

        localStorage.setItem('cards', JSON.stringify(Cards));
    }
}

export default CardsModel;