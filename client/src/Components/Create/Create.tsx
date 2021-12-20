import React, {useEffect, useState} from 'react';
import Card from './Blocks/Card';
import './Create.scss';
import {ICard, ICards} from './CreateProps';
import './Blocks/CreateBlocks.scss';
import CardNavBar from "./Blocks/CardNavBar";

const Create = () => {

    const [error, setError] = useState<number | null>(null);

    const [title, setTitle] = useState("");

    const CardsAlreadyHave:ICards = JSON.parse(localStorage.getItem('cards') || '{}');

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
                <CardNavBar />
                <Card />
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