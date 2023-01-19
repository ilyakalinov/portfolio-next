import { DetailedHTMLProps, HTMLAttributes, useContext } from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import Paragraph from '@/components/Paragraph';
import { Button } from '@/components/Button/Button';
import { AppContext } from '@/context/app.context';
import React from 'react';
import ReactHintFactory from 'react-hint';
import 'react-hint/css/index.css';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({}: HeaderProps): JSX.Element => {
    const ReactHint = ReactHintFactory(React);
    const { langValue } = useContext(AppContext);

    const yearsOld = Math.floor(
        (Date.parse(new Date().toString()) - Date.parse(new Date('1999-03-27').toString())) / (1000 * 60 * 60 * 24 * 364)
    );

    return (
        <div className={cn(styles.wrapper)}>
            <div className={styles.inner}>
                <div className={styles.first}>
                    <Button
                        apperance='perpel'
                        onClick={(e) => window.open('https://t.me/ilya_kalinov', '_ blank')}>
                        {langValue.header.button}
                    </Button>
                    <Paragraph
                        data-rh='clock to copy'
                        size='l'
                        className={styles.paragraph}
                        onClick={() => navigator.clipboard.writeText('@ilya_kalinov')}>
                        @ilya_kalinov
                    </Paragraph>
                </div>
                <div className={styles.second}>
                    <div className={styles.description}>
                        <Paragraph fontWeight='b'>
                            {langValue.header.name}, {yearsOld}
                        </Paragraph>
                        <Paragraph fontWeight='s'>{langValue.header.description}</Paragraph>
                    </div>
                    <img
                        className={styles.photo}
                        src='MainPhoto.png'></img>
                </div>
            </div>
            <ReactHint
                autoPosition
                events={{ click: false, focus: false, hover: true }}
            />
        </div>
    );
};
