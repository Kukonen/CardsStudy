import React, {useState, useEffect} from 'react';

const CardNavBar = (props:any) => {

    const {currentCardIndex, setCurrentCardIndex, cardLength} = props;

    const [currentIndex, setCurrentIndex] = useState<number>(currentCardIndex);

    const [NavBarItemsElements, setNavBarItemsElements] = useState<any | null>( []);

    useEffect(() => {

        if (!NavBarItemsElements) {
            return;
        }

        console.log(NavBarItemsElements)
        let cardArray:any[] = NavBarItemsElements;


        cardArray.push(
            <button
                key={cardLength}
                className={currentIndex === cardLength ? "CreateNavBarItemActive" : "CreateNavBarItem"}
                onClick={() => {
                    setCurrentIndex(cardLength)
                    setCurrentCardIndex(cardLength);
                }}
            >
                {cardLength}
            </button>
        )
        setNavBarItemsElements(cardArray);
    }, [cardLength])

    useEffect(() => {
        let cardArray:any[] = [];
        if (cardLength > 1) {

            for (let cardIndex = 1; cardIndex <= cardLength; cardIndex++) {
                cardArray.push(
                    <button
                        key={cardIndex}
                        className={currentIndex === cardIndex ? "CreateNavBarItemActive" : "CreateNavBarItem"}
                        onClick={() => {
                            setCurrentIndex(cardIndex)
                            setCurrentCardIndex(cardIndex);
                        }}
                    >
                        {cardIndex}
                    </button>
                )
            }
        }else {
            cardArray.push(
                <button
                    key={1}
                    className="CreateNavBarItemActive"
                    onClick={() => {
                        setCurrentIndex(1)
                        setCurrentCardIndex(1);
                    }}
                >
                    1
                </button>
            )
        }

        setNavBarItemsElements(cardArray);
    }, [])



    return (
        <div className="CreateNavBar">
            {NavBarItemsElements}
        </div>
    )
}

export default CardNavBar;