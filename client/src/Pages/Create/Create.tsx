import React, {useState, useEffect} from 'react';
import Card from './Blocks/Card';
import './Create.scss';
import './Blocks/CreateBlocks.scss';
import CardNavBar from "./Blocks/CardNavBar";
import CardsModel, {I2Block, ICard, ICards} from '../../Models/Cards';

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
        
        setTitle(Cards?.title as string);

    }, [])

    const createCard = () => {

        // check cards for empty
        // if at least one is empty
        // when no add new card!

        // get actual cards by localstorage
        const Cards:ICards = JSON.parse(localStorage.getItem('cards') as string);

        if (!Cards) {
            return;
        }

        const cardsLength = Object.keys(Cards.cards as Object).length;

        Cards.cards = Object.values(Cards.cards)

        for (let cardIndex = 0; cardIndex < cardsLength; ++cardIndex) {
            if (Cards.cards === undefined) {
                return;
            }
            if (CardsModel.cardIsEmpty(Cards.cards[cardIndex])) {
                return;
            }
        }

        const emptyAnswer:I2Block = {
            block1: "",
            block2: "",
            correct: 1
        }


        Cards.cards.push({
            id: CardsModel.generateRandomStringByLength(5),
            title: "",
            text: "",
            type: "blocks2",
            content: {
                id: CardsModel.generateRandomStringByLength(5),
                answer: emptyAnswer
            },
            points: 0
        })

        localStorage.setItem('cards', JSON.stringify(Cards))

        setCards(Cards.cards);

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
                           placeholder="Title of Cards"
                           style={{fontSize:22}}
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