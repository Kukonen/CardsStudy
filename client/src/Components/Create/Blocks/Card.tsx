import React, {useEffect, useState} from 'react';
import CardsModel ,{I2Block, I4Block, CardTypes} from '../../../Models/Cards';
import './CreateBlocks.scss';

import Block2 from './Types/Block2';
import Block4 from './Types/Block4';
import Text from './Types/Text';

const Card = (props: any) => {

    const {card, currentCardIndex} = props;

    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [points, setPoints] = useState<number>(0);

    const [cardType, setCardType] = useState<CardTypes>("blocks2")

    const [answer, setAnswer] = useState<string | I2Block | I4Block | undefined>("");

    useEffect(() => {

        if (!card) {
            setTitle("");
            setText("");
            setCardType("blocks2");
            setAnswer({
                block1: "",
                block2: "",
                correct: 1
            });
            setPoints(0);
            return;
        }

        setTitle(card.title);
        setText(card.text);
        setCardType(card.type);
        setAnswer(card.content.answer);
        setPoints(card.points ? card.points : 0);

    }, [card])

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
                        checked={cardType === "blocks2"}
                    />
                    <label 
                        htmlFor="CardInputRadioBlock2"
                        onClick={() => {
                            setAnswer(undefined)
                            setCardType("blocks2")
                        }}
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
                        checked={cardType === "blocks4"}
                    />
                    <label 
                        htmlFor="CardInputRadioBlock4"
                        onClick={() => {
                            setAnswer(undefined);
                            setCardType("blocks4")
                        }}
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
                        onClick={() => {
                            setAnswer(undefined);
                            setCardType("text")
                        }}
                    >
                        Text
                    </label>
                </div>
            </div>
            {
                cardType === "blocks2" ?
                    <Block2
                        changeAnswer={(newAnswer:I2Block) => setAnswer(newAnswer)}
                        answer={ answer }
                    /> :
                cardType === "blocks4" ?
                    <Block4
                        changeAnswer={(newAnswer:I4Block) => setAnswer(newAnswer)}
                        answer={ answer }
                    /> :
                cardType === "text" ?
                    <Text
                        changeAnswer={(newAnswer:string) => setAnswer(newAnswer)}
                        answer={ answer }
                    /> :
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
                    onClick={() => CardsModel.saveCard(title, text, cardType, answer, points, currentCardIndex)}
                >
                    Save Card
                </button>
            </div>
        </div>
    )
}

export default Card;