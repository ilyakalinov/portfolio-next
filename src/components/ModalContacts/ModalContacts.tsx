import { ModalContactsProps } from './ModalContacts.props';
import styles from './ModalContacts.module.css';
import cn from 'classnames';
import Card from '../Card';
import CloseIcon from './CloseIcon.svg';
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import Paragraph from '../Paragraph';

export const ModalContacts = ({ open = false, langValue, className, ...props }: ModalContactsProps): JSX.Element => {
    const { setOpen } = useContext(AppContext);

    return (
        <div
            className={cn(styles.modal, className, {
                [styles.open]: open,
            })}
            onClick={(e) => e.currentTarget === e.target && setOpen && setOpen()}
            {...props}>
            <Card
                withBorder={true}
                className={styles.card}>
                <div className={styles.inner}>
                    <CloseIcon
                        className={styles.closeIcon}
                        onClick={() => setOpen && setOpen()}
                    />
                    <Paragraph className={styles.title}>{langValue.title}</Paragraph>
                    <Paragraph className={styles.text}>{langValue.text}</Paragraph>
                    <button
                        onClick={(e) => window.open('https://t.me/ilya_kalinov', '_ blank')}
                        className={styles.buttonTo}>
                        Send message
                    </button>
                    <div className={styles.iconWrapper}>
                        <div className={styles.contactsIcon}>
                            <img
                                onClick={(e) => window.open('https://github.com/ilyakalinov', '_ blank')}
                                src='./gh.png'
                                alt=''
                            />
                        </div>
                        <div className={styles.contactsIcon}>
                            <img
                                onClick={(e) => window.open('https://www.instagram.com/ilya_kalinov/', '_ blank')}
                                src='./inst.png'
                                alt=''
                            />
                        </div>
                        <div className={styles.contactsIcon}>
                            <img
                                onClick={(e) => window.open('https://t.me/ilya_kalinov', '_ blank')}
                                src='./telega.png'
                                alt=''
                            />
                        </div>
                        <div className={styles.contactsIcon}>
                            <img
                                onClick={(e) => window.open('https://vk.com/id144865745', '_ blank')}
                                src='./vk.png'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};
