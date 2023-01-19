import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { lang } from '../../public/languages/language';
import { useCookies } from 'react-cookie';

export interface IAppContext {
    language: string;
    langValue: any;
    toggleModalOpen: boolean;
    setLanguage?: (language: string) => void;
    setOpen?: () => void;
}

export const AppContext = createContext<IAppContext>({
    language: 'ru',
    langValue: lang.rus,
    toggleModalOpen: false,
});

export const AppContextProvider = ({
    language,
    langValue,
    toggleModalOpen,
    children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
    const [languageValue, setLangValue] = useState<Object>(lang.rus);

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const setLanguage = (language: string) => {
        setLangValue(language === 'rus' ? lang.rus : lang.eng);
    };

    const setOpen = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <AppContext.Provider value={{ language, langValue: languageValue, toggleModalOpen: modalOpen, setLanguage, setOpen }}>
            {children}
        </AppContext.Provider>
    );
};
