import React, {useEffect, useState} from 'react';
import { ICard } from '../CreateProps';
import './CreateBlocks.scss';

import Block2 from './Types/Block2';
import Block4 from './Types/Block4';
import Text from './Types/Text';

interface I2Block {
    block1: string;
    block2: string;
    correct: 1 | 2;
}

interface I4Block {
    block1: string;
    block2: string;
    block3: string;
    block4: string;
    correct: 1 | 2 | 3 | 4;
}

const Card = () => {

    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [points, setPoints] = useState<number>(0);

    type cardTypeType = "2block" | "4block" | "text"
    const [cardType, setCardType] = useState<cardTypeType>("2block")

    const [answer, setAnswer] = useState<string | I2Block | I4Block>("");

    const saveAndCreateNewCard = () => {
        saveCard(title, text, cardType, answer)
    }

    const saveCard = (title:string, text:string, type:cardTypeType, answer:string | I2Block | I4Block) => {
        console.log(answer);
    }

    const createCard = () => {

    }

    return (
        <div id="Card">
            <div id="CardTitle">
                <input 
                    type="text"
                    className="CreateInput"
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Title of This Card"
                />
            </div>
            <div id="CardText">
                <textarea
                    rows={5}
                    className="CreateInputTextarea"
                    defaultValue={text}
                    onChange={event => setText(event.target.value)}
                    placeholder="Text of This Card"
                />
            </div>
            <div id="CardType">
                <div className="CardInputRadioBlock">
                    <input 
                        type="radio" 
                        id="CardInputRadioBlock2"
                        name="type"
                        className="CardInputRadio"
                        checked={cardType === "2block"}
                    />
                    <label 
                        htmlFor="CardInputRadioBlock2"
                        onClick={() => setCardType("2block")}
                    >
                        2 - block
                    </label>
                </div>
                <div className="CardInputRadioBlock">
                    <input 
                        type="radio" 
                        id="CardInputRadioBlock4"
                        name="type"
                        className="CardInputRadio"
                        checked={cardType === "4block"}
                    />
                    <label 
                        htmlFor="CardInputRadioBlock4"
                        onClick={() => setCardType("4block")}
                    >
                        4 - block
                    </label>
                </div>
                <div className="CardInputRadioBlock">
                    <input 
                        type="radio" 
                        id="CardInputRadioText"
                        name="type"
                        className="CardInputRadio"
                        checked={cardType === "text"}
                    />
                    <label 
                        htmlFor="CardInputRadioText"
                        onClick={() => setCardType("text")}
                    >
                        Text
                    </label>
                </div>
            </div>
            {
                cardType === "2block" ? 
                    <Block2 changeAnswer={(newAnswer:I2Block) => setAnswer(newAnswer)}/> :
                cardType === "4block" ?
                    <Block4 changeAnswer={(newAnswer:I4Block) => setAnswer(newAnswer)}/> :
                cardType === "text" ?
                    <Text changeAnswer={(newAnswer:string) => setAnswer(newAnswer)}/> :
                    null
            }
            <div id="CreatePoints">
                    <span>
                      Points:
                    </span>
                <input
                    type="number"
                    size={2}
                    className="CreatePointsInput"
                    value={points}
                    onChange={event => {
                        const newPoints = Number(event.target.value);
                        setPoints(newPoints);
                    }
                    }
                />
            </div>
            <div className="CardButtonSection">
                <button
                    className="CardButton"
                    onClick={() => saveAndCreateNewCard()}
                >
                    Save and create new card
                </button>
            </div>
        </div>
    )
}

export default Card;