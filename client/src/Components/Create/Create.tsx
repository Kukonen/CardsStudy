import React, {useState} from 'react';
import Card from './Blocks/Card';
import Title from './Blocks/Title';
import './Create.scss';
import { ICard } from './CreateProps';

const Create = () => {

    const [Cards, setCards] = useState<ICard[]>([]);

    const [error, setError] = useState<number | null>(null);

    const createCards = () => {

    }

    return (
        <div id="Create">
            <div id="CreateSection">
                <Title/>
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