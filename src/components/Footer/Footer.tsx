import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import Paragraph from '@/components/Paragraph';

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({}: FooterProps): JSX.Element => {
    return (
        <div className={cn(styles.footer)}>
            <div className={styles.inner}>
                <Paragraph fontWeight='s'>2022 - Present / Kalinov Ilya</Paragraph>
            </div>
            <div className={styles.inner}>
                <Paragraph fontWeight='s'>Digital resume. Print only if necessary</Paragraph>
            </div>
        </div>
    );
};
