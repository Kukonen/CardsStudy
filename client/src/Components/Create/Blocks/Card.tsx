import React, { useState } from 'react';
import { ICard } from '../CreateProps';
import './CreateBlocks.scss';

const Card = () => {

    const [title, setTitle] = useState<string>("");

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
                <div>
                </div>
            </div>
        </div>
    )
}

export default Card;