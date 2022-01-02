import React from "react";
import './InputText.scss';
import {InputTextProps} from "./InputText.props";
import classNames from "classnames";

const InputText = ({fontSize, placeholder} : InputTextProps) => {
    return (
        <input type="text"
            placeholder={placeholder}
            className={"InputText"}
            style={{
                fontSize: fontSize
            }}
        />
    )
}

export default InputText;