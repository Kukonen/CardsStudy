import {InputHTMLAttributes, DetailedHTMLProps} from 'react';

export interface InputTextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    fontSize: number;
    placeholder?: string;
    textAlgin ?: string
}