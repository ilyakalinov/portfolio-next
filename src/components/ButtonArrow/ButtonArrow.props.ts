import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonArrowProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    arrow?: 'right' | 'down';
}
