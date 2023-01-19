import Card from '@/components/Card';
import Paragraph from '@/components/Paragraph';
import styles from '../mainPage.module.css';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import ButtonArrow from '@/components/ButtonArrow';
import cn from 'classnames';

export interface WorkExperienceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    langValue: any;
}

export const WorkExperience = ({ langValue, ...props }: WorkExperienceProps): JSX.Element => {
    const [open, setOpen] = useState(true);

    return (
        <Card
            className={styles.workExperience}
            {...props}>
            <Paragraph
                size='l'
                fontWeight='b'
                uppercase={true}>
                {langValue.workExperience.title}
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
                {langValue.workExperience.workExperienceItems.map((e: any) => (
                    <Card
                        withBorder={false}
                        className={styles.workExperienceItem}
                        key={e.title}>
                        <Paragraph
                            size='m'
                            fontWeight='b'
                            className={styles.workExperienceTitle}>
                            {e.title}
                        </Paragraph>
                        <Paragraph
                            size='m'
                            fontWeight='s'
                            className={styles.workExperienceTime}>
                            {e.time}
                        </Paragraph>
                        {e.description.map((d: any) => (
                            <div key={d.text}>
                                <Paragraph
                                    size='m'
                                    fontWeight='r'>
                                    {d.text}
                                </Paragraph>
                                <ul className={styles.workProjectsDescription}>
                                    {d.description?.map((d: any) => (
                                        <li key={d}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Card>
                ))}
            </div>
        </Card>
    );
};
