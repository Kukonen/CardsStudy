import React, {useState, useEffect} from 'react';
import Card from './Blocks/Card';
import './Create.scss';
import './Blocks/CreateBlocks.scss';
import CardNavBar from "./Blocks/CardNavBar";
import CardsModel, {ICard} from '../../Models/Cards';
import card from "./Blocks/Card";

const Create = () => {

    const [error, setError] = useState<number | null>(null);

    const [title, setTitle] = useState("");

    const [currentCardIndex, setCurrentCardIndex] = useState<number>(1)
    const [cardLength, setCardLength] = useState<number>(1);
    const [cards, setCards] = useState<ICard[]>()

    useEffect(() => {
        const Cards = CardsModel.loadCards();

        if (Cards !== null) {

        }

        const CardsLength = Object.keys(Cards?.cards as Object).length

        setCardLength(CardsLength ? CardsLength : 1);

        setCards(Cards?.cards as ICard[]);

    }, [])

    const createCard = () => {

        // check cards for empty
        // if at least one is empty
        // when no add new card!

        const cardsLength = Object.keys(cards as Object).length;

        if (!cards) {
            return;
        }

        for (let cardIndex = 0; cardIndex < cardsLength; ++cardIndex) {
            if (CardsModel.cardIsEmpty(cards[cardIndex])) {
                return;
            }
        }

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
                               CardsModel.changeTitle(event.target.value);
                           }}
                           className="CreateInput"
                           placeholder="Title of Cards"
                    />
                </div>
                <CardNavBar
                    currentCardIndex={currentCardIndex}
                    setCurrentCardIndex={(cardIndex: number) => setCurrentCardIndex(cardIndex)}
                    cardLength={cardLength}
                    createCard={() => createCard()}
                />
                <Card
                    currentCardIndex={currentCardIndex}
                    cardLength={cardLength}
                    card={cards ? cards[currentCardIndex - 1] : null}
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