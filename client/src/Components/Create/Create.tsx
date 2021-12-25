import React, {useState} from 'react';
import Card from './Blocks/Card';
import './Create.scss';
import {ICards} from './CreateProps';
import './Blocks/CreateBlocks.scss';
import CardNavBar from "./Blocks/CardNavBar";

const Create = () => {

    const [error, setError] = useState<number | null>(null);

    const [title, setTitle] = useState("");

    const [currentCard, setCurrentCard] = useState(0);
    const [currentCardIndex, setCurrentCardIndex] = useState<number>(1)
    const [cardLength, setCardLength] = useState<number>(1);

    const createCard = () => {
        setCardLength(cardLength + 1);
    }

    const createCards = () => {

    }

    return (
        <div id="Create">
            <div id="CreateSection">
                <div id="CreateTitle">
                    <input type="text"
                           value={title}
                           onChange={event => {
                               setTitle(event.target.value);
                           }}
                           className="CreateInput"
                           placeholder="Title of Cards"
                    />
                </div>
                <CardNavBar
                    currentCardIndex={currentCardIndex}
                    setCurrentCardIndex={(cardIndex:number) => setCurrentCardIndex(cardIndex)}
                    cardLength={cardLength}
                    createCard={() => createCard()}
                />
                <Card
                    currentCard={currentCard}
                    cardLength={cardLength}
                />
                <div className="CreateButtonSection">
                    <button
                        className="CreateButton"
                        onClick={() => createCards()}
                    >
                        Create!
                    </button>
                </div>

                {
                    error ? 
                        <div>
                            That's was wrong!
                        </div> :
                        null
                }
            </div>
        </div>
    )
}

export default Create;