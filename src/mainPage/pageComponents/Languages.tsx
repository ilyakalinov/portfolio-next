import Card from '@/components/Card';
import styles from '../mainPage.module.css';

export const Languages = (): JSX.Element => {
    return (
        <Card
            withBorder={false}
            className={styles.languages}>
            <img
                className={styles.iconsLang}
                src='ru.png'
            />
            <img
                className={styles.iconsLang}
                src='gb.png'
            />
            <img
                className={styles.iconsLang}
                src='by.png'
            />
        </Card>
    );
};
