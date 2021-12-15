import React, { useState } from 'react';
import { ICard } from '../CreateProps';
import './CreateBlocks.scss';

import Block2 from './Types/Block2';
import Block4 from './Types/Block4';
import Text from './Types/Text';

const Card = () => {

    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");

    type cardTypeType = "2block" | "4block" | "text"
    const [cardType, setCardType] = useState<cardTypeType>("2block")

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
                    <Block2 /> :
                cardType === "4block" ?
                    <Block4 /> :
                cardType === "text" ?
                    <Text /> :
                    null
            }
        </div>
    )
}

export default Card;