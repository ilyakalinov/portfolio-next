import styles from './LangSwitcher.module.css';
import { useContext, useEffect } from 'react';
import { AppContext } from '@/context/app.context';
import { useCookies } from 'react-cookie';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {}

export const LangSwitcher = ({ ...props }: CardProps): JSX.Element => {
    const { setLanguage } = useContext(AppContext);

    const [cookies, setCookie] = useCookies(['lang']);

    useEffect(() => {
        setLanguage && setLanguage(cookies.lang);
    }, [cookies]);

    return (
        <select
            className={styles.switcher}
            onChange={(e) => {
                setLanguage && setLanguage(e.target.value);
                setCookie('lang', e.target.value, { path: '/' });
            }}
            value={cookies.lang}
            {...props}>
            <option className={styles.option}>rus</option>
            <option className={styles.option}>eng</option>
        </select>
    );
};
