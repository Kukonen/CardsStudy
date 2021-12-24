import React, {useState, useEffect} from 'react';
import card from "./Card";

const CardNavBar = (props:any) => {

    const {currentCardIndex, setCurrentCardIndex, cardLength} = props;

    const [currentIndex, setCurrentIndex] = useState<number>(currentCardIndex);

    const [NavBarItemsElements, setNavBarItemsElements] = useState<any | any[]>( []);

    const [reloadComponent, setReloadComponent] = useState<boolean>(false);

    useEffect(() => {
        if (!NavBarItemsElements) {
            return;
        }

        let cardArray:any[] = NavBarItemsElements;

        cardArray.push(getNewNabBarItem(cardLength))

        setNavBarItemsElements(cardArray);

        setReloadComponent(!reloadComponent);
    }, [cardLength])

    useEffect(() => {
        let cardArray:any[] = [];

        if (cardLength > 1) {
            for (let cardIndex = 1; cardIndex <= cardLength; cardIndex++) {
                cardArray.push(getNewNabBarItem(cardIndex))
            }

        }else {
            cardArray.push(getNewNabBarItem(1))
        }

        setNavBarItemsElements(cardArray);
    }, [])

    const getNewNabBarItem = (number:number) => {
        return (
            <button
                key={number}
                className={ currentIndex === number ? "CreateNavBarItemActive" : "CreateNavBarItem"}
                onClick={() => {
                    setCurrentIndex(number);
                    setCurrentCardIndex(number);
                }}
            >
                {number}
            </button>
        )
    }

    return (
        <div className="CreateNavBar">
            {NavBarItemsElements}
        </div>
    )
}

export default CardNavBar;