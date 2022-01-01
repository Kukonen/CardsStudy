import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    fontSize: number;
    link ?: string;
}