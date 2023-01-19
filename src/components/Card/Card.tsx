import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ children, withBorder = true, className, ...props }: CardProps): JSX.Element => {
    return (
        <div
            className={cn(styles.card, className, {
                [styles.withBorder]: withBorder,
            })}
            {...props}>
            {children}
        </div>
    );
};
