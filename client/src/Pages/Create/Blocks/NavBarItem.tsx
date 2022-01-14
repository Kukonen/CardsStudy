import React, {useEffect} from "react";
import classNames from "classnames";

const NavBarItem = (props:any) => {

    const {number, currentCardIndex, createCard, setCurrentIndex, setCurrentCardIndex, currentIndex} = props;

    useEffect(() => {
        console.log(number)
    }, [currentIndex])

    if (number === '+') {
        return (
            <button
                key={number}
                className="CreateNavBarItem"
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
            className={ classNames({
                CreateNavBarItem: !(currentCardIndex === number),
                CreateNavBarItemActive: (currentCardIndex === number)
            })}
            onClick={() => {
                setCurrentIndex(number);
                setCurrentCardIndex(number);
            }}
        >
            {number}
        </button>
    )
}

export default NavBarItem;