import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ModalContactsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    open: boolean;
    langValue: any;
}
