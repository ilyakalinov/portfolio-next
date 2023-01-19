import { ButtonArrowProps } from './ButtonArrow.props';
import styles from './ButtonArrow.module.css';
import ArrowIcon from './Arrow.svg';
import cn from 'classnames';

export const ButtonArrow = ({ arrow = 'right', className, ...props }: ButtonArrowProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {})}
            {...props}>
            <span
                className={cn(styles.arrow, {
                    [styles.arrow_down]: arrow == 'down',
                    [styles.arrow_right]: arrow == 'right',
                })}>
                <ArrowIcon />
            </span>
        </button>
    );
};
