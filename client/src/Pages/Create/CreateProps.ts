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
    type: 'blocks2' | 'blocks4' | 'text';
    content: ICardContentBlock2 | ICardContentBlock4 | ICardContentText;
}

interface ICardContentBlock2 {
    id: string;
    block1: string;
    block2: string;
    correct: 1 | 2;
    points: number;
}

interface ICardContentBlock4 {
    id: string;
    block1: string;
    block2: string;
    block3: string;
    block4: string;
    correct: 1 | 2 | 3 | 4;
    points: number;
}

interface ICardContentText {
    id: string;
    text: string;
    correct: string;
    points: number;
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