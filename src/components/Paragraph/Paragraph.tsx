import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
    children,
    size = 's',
    fontWeight = 'r',
    uppercase = false,
    className,
    ...props
}: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(styles.paragraph, className, {
                [styles.small]: size == 's',
                [styles.middle]: size == 'm',
                [styles.large]: size == 'l',
                [styles.smallWeight]: fontWeight == 's',
                [styles.regularWeight]: fontWeight == 'r',
                [styles.boldWeight]: fontWeight == 'b',
                [styles.uppercase]: uppercase === true,
            })}
            {...props}>
            {children}
        </p>
    );
};
