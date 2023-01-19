import Card from '@/components/Card';
import styles from '../mainPage.module.css';
import Paragraph from '@/components/Paragraph';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import ButtonArrow from '@/components/ButtonArrow';
import cn from 'classnames';

export interface SkillToolsInterestsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    langValue: any;
}

export const SkillToolsInterests = ({ langValue, ...props }: SkillToolsInterestsProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    return (
        <Card
            className={styles.skills}
            {...props}>
            <Paragraph
                size='l'
                fontWeight='b'
                uppercase={true}>
                {langValue.title}
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
                <ul className={styles.skillsItems}>
                    {langValue.items.map((s: string) => (
                        <li key={s}>{s}</li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};
