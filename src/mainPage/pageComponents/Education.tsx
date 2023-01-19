import ButtonArrow from '@/components/ButtonArrow';
import Card from '@/components/Card';
import Paragraph from '@/components/Paragraph';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import styles from '../mainPage.module.css';
import cn from 'classnames';

export interface EducationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    langValue: any;
}

export const Education = ({ langValue, ...props }: EducationProps): JSX.Element => {
    const [open, setOpen] = useState(true);

    return (
        <Card
            className={styles.education}
            {...props}>
            <Paragraph
                size='l'
                fontWeight='b'
                uppercase={true}>
                {langValue.education.title}
            </Paragraph>
            <ButtonArrow
                arrow={open ? 'down' : 'right'}
                onClick={() => setOpen(!open)}
            />
            <div
                className={cn(styles.wrapper, {
                    [styles.open]: open,
                    [styles.close]: !open,
                })}>
                {langValue.education.educationItems.map((e: any) => (
                    <Card
                        withBorder={false}
                        className={styles.educationItem}
                        key={e.title}>
                        <Paragraph
                            size='m'
                            fontWeight='b'
                            className={styles.educationTitle}>
                            {e.title}
                        </Paragraph>
                        <Paragraph
                            size='m'
                            fontWeight='s'
                            className={styles.educationTime}>
                            {e.time}
                        </Paragraph>
                        <Paragraph
                            size='m'
                            fontWeight='s'
                            className={styles.educationDescr}>
                            {e.description}
                        </Paragraph>
                    </Card>
                ))}
            </div>
        </Card>
    );
};
