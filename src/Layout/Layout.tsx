import { FunctionComponent } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from '@/components/Header/Header';
import { AppContextProvider } from '@/context/app.context';
import { lang } from '../../public/languages/language';
import LangSwitcher from '@/components/LangSwitcher';
import { Footer } from '@/components/Footer/Footer';
import UpController from '@/components/UpController';

export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={cn(styles.wrapper)}>
            <div className={styles.inner}>
                <Header />
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider
                language={'ru'}
                langValue={lang.rus}
                toggleModalOpen={false}>
                <Layout>
                    <Component {...props} />
                </Layout>
                <LangSwitcher />
                <UpController />
            </AppContextProvider>
        );
    };
};
