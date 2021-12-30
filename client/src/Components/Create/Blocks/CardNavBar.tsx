import React, {useState, useEffect} from 'react';

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
                cardArray.push(getNewNabBarItem(cardIndex))
            }
        } else {
            cardArray.push(getNewNabBarItem(cardLength))
        }

        cardArray.push(getNewNabBarItem('+'))

        setNavBarItemsElements(cardArray);

        setReloadComponent(!reloadComponent);
    }, [cardLength])

    useEffect(() => {
        let cardArray:any[] = [];
        console.log(cardLength)
        if (cardLength > 1) {
            for (let cardIndex = 1; cardIndex <= cardLength; cardIndex++) {
                cardArray.push(getNewNabBarItem(cardIndex))
            }

        }else {
            cardArray.push(getNewNabBarItem(1))
        }
        cardArray.push(getNewNabBarItem(1));
        cardArray.push(getNewNabBarItem('+'))

        setNavBarItemsElements(cardArray);
    }, [])

    const getNewNabBarItem = (number:number | '+') => {

        if (number === '+') {
            return (
                <button
                    key={number}
                    className={ getNavBarClassName(0) }
                    onClick={() => {
                        createCard();
                    }}
                >
                    {number}
                </button>
            )
        }

        return (
            <button
                key={number}
                className={ getNavBarClassName(number) }
                onClick={() => {
                    setCurrentIndex(number);
                    setCurrentCardIndex(number);
                }}
            >
                {number}
            </button>
        )
    }

    const getNavBarClassName = (number:number):string => {
        return currentIndex === number ? "CreateNavBarItemActive" : "CreateNavBarItem";
    }

    return (
        <div className="CreateNavBar">
            {NavBarItemsElements}
        </div>
    )
}

export default CardNavBar;