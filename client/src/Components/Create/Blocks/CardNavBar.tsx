import React, {ReactElement, useState} from 'react';
import {ICards} from "../CreateProps";

const CardNavBar = () => {

    const [NavBarItems, setNavBarItems] = useState<ICards>(JSON.parse(localStorage.getItem('cards') || '{}'));
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const [NavBarItemsElements, setNavBarItemsElements] = useState<any | null>( null);

    if (NavBarItems.cards) {
        setNavBarItemsElements(NavBarItems.cards.map((card, index) => {
            return (
                <div key={index + 1}
                     className={currentIndex === index ? "CreateNavBarItemActive" : "CreateNavBarItem"}
                     onClick={() => setCurrentIndex(index)}
                >
                    {index + 1}
                </div>
            )
        }));
    }

    if (!NavBarItemsElements) {
        return (
            <div className="CreateNavBar">
                <button className="CreateNavBarItemActive">
                    1
                </button>
            </div>
        )
    }

    return (
        <div className="CreateNavBar">
            {NavBarItemsElements}
        </div>
    )
}

export default CardNavBar;