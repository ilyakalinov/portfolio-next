import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import { useState } from 'react';

export const Button = ({ children, apperance, className, ...props }: ButtonProps): JSX.Element => {
    const [pushed, setPushed] = useState<boolean>(false);
    return (
        <div className={styles.wrapper}>
            <div
                className={cn(styles.buttonWrapper, className, {
                    [styles.perpel]: apperance == 'perpel',
                    [styles.green]: apperance == 'green',
                    [styles.drown]: apperance == 'drown',
                    [styles.gray]: apperance == 'gray',
                })}>
                <button
                    className={cn(styles.button, {
                        [styles.perpel]: apperance == 'perpel',
                        [styles.green]: apperance == 'green',
                        [styles.drown]: apperance == 'drown',
                        [styles.gray]: apperance == 'gray',
                        [styles.pushed]: pushed,
                    })}
                    onMouseDown={(e) => setPushed(true)}
                    onMouseUp={(e) => setPushed(false)}
                    {...props}>
                    {children}
                </button>
            </div>
        </div>
    );
};
