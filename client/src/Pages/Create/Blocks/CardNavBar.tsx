import React, {useState, useEffect} from 'react';
import NavBarItem from "./NavBarItem";

const CardNavBar = (props:any) => {

    const {currentCardIndex, setCurrentCardIndex, cardLength, createCard} = props;

    const [currentIndex, setCurrentIndex] = useState<number>(currentCardIndex);

    const [NavBarItemsElements, setNavBarItemsElements] = useState<any | any[]>( []);

    const [reloadComponent, setReloadComponent] = useState<boolean>(false);

    useEffect(() => {
        if (!NavBarItemsElements) {
            return;
        }

        let cardArray:any[] = NavBarItemsElements;

        cardArray.pop();

        // if element refresh after first load items
        // else add only 1 new card
        if (cardLength > cardArray.length + 1) {
            cardArray = [];
            for (let cardIndex = 1; cardIndex <= cardLength; cardIndex++) {
                cardArray.push(<NavBarItem
                    number={cardIndex}
                    currentCardIndex={currentCardIndex}
                    createCard={createCard}
                    setCurrentIndex={setCurrentIndex}
                    setCurrentCardIndex={setCurrentCardIndex}
                    currentIndex={currentIndex}
                />)
            }
        } else {
            cardArray.push(<NavBarItem
                number={cardLength}
                currentCardIndex={currentCardIndex}
                createCard={createCard}
                setCurrentIndex={setCurrentIndex}
                setCurrentCardIndex={setCurrentCardIndex}
                currentIndex={currentIndex}
            />)
        }

        cardArray.push(<NavBarItem
            number={'+'}
            currentCardIndex={currentCardIndex}
            createCard={createCard}
            setCurrentIndex={setCurrentIndex}
            setCurrentCardIndex={setCurrentCardIndex}
            currentIndex={currentIndex}
        />)

        setNavBarItemsElements(cardArray);

        setReloadComponent(!reloadComponent);
    }, [cardLength])

    useEffect(() => {
        let cardArray:any[] = [];
        if (cardLength > 1) {
            for (let cardIndex = 1; cardIndex <= cardLength; cardIndex++) {
                cardArray.push(<NavBarItem
                    number={cardIndex}
                    currentCardIndex={currentCardIndex}
                    createCard={createCard}
                    setCurrentIndex={setCurrentIndex}
                    setCurrentCardIndex={setCurrentCardIndex}
                    currentIndex={currentIndex}
                />)
            }

        }else {
            cardArray.push(<NavBarItem
                number={1}
                currentCardIndex={currentCardIndex}
                createCard={createCard}
                setCurrentIndex={setCurrentIndex}
                setCurrentCardIndex={setCurrentCardIndex}
                currentIndex={currentIndex}
            />);
        }
        cardArray.push(<NavBarItem
            number={'+'}
            currentCardIndex={currentCardIndex}
            createCard={createCard}
            setCurrentIndex={setCurrentIndex}
            setCurrentCardIndex={setCurrentCardIndex}
            currentIndex={currentIndex}
        />)

        setNavBarItemsElements(cardArray);
    }, [])

    return (
        <div className="CreateNavBar">
            {NavBarItemsElements}
        </div>
    )
}

export default CardNavBar;