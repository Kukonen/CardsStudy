import React from "react";
import {ButtonProps} from "./Button.props";
import './Button.scss';
import {Link} from "react-router-dom";
import classNames from "classnames";

const Button = ({children, link, fontSize}:ButtonProps) => {

    if (link) {
        return (
            <Link to={link} className={
                classNames(
                    "Button",
                    "ButtonLink"
                )}
                style={{
                    fontSize: fontSize
                }}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            className={"Button"}
            style={{
                fontSize: fontSize
            }}
        >
            {children}
        </button>
    )
}

export default Button;