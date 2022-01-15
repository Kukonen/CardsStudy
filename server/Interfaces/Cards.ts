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
    content: {
        id: string;
        answer: I2Block | I4Block | ICardContentText;
    };
    points: number;
}

interface ICardContentText {
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

export interface SendCard {
    id: string;
    number: number;
    title: string;
    text: string;
    type: CardTypes;
    content: {
        id: string;
        answer: string | I2Block | I4Block | undefined;
    }
    points: number;
}