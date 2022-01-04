import React from "react";
import './InputText.scss';
import {InputTextProps} from "./InputText.props";
import classNames from "classnames";

const InputText = ({fontSize, placeholder, textAlgin} : InputTextProps) => {

    const style = {
        fontSize: fontSize,
        textAlgin: 'start'
    }

    if (textAlgin) {
        style.textAlgin = textAlgin;
    }

    return (
        <input type="text"
            placeholder={placeholder}
            className={"InputText"}
            style={style}
        />
    )
}

export default InputText;