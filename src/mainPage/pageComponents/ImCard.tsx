import Button from '@/components/Button';
import Card from '@/components/Card';
import Paragraph from '@/components/Paragraph';
import styles from '../mainPage.module.css';
import { DetailedHTMLProps, HTMLAttributes, useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '@/context/app.context';

export interface ImCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    langValue: any;
}

export const ImCard = ({ langValue, ...props }: ImCardProps): JSX.Element => {
    const { setOpen } = useContext(AppContext);
    const router = useRouter();

    return (
        <Card
            withBorder={false}
            className={styles.general}
            {...props}>
            <Paragraph
                size='l'
                fontWeight='b'>
                {langValue.im.im}
            </Paragraph>
            <Paragraph
                size='s'
                fontWeight='s'>
                {langValue.im.imDescription}
            </Paragraph>
            <div className={styles.buttomWrapper}>
                {/* <Button
                    apperance='gray'
                    onClick={(e) =>
                        router.push({
                            pathname: '/portfolio',
                        })
                    }>
                    {langValue.im.myPotfolio}
                </Button> */}
                <Button
                    apperance='drown'
                    onClick={(e) => window.open('https://github.com/ilyakalinov', '_ blank')}>
                    {langValue.im.github}
                </Button>
                <Button
                    apperance='green'
                    onClick={(e) => setOpen && setOpen()}>
                    {langValue.im.contacts}
                </Button>
            </div>
        </Card>
    );
};
