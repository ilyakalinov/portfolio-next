import { withLayout } from '@/Layout/Layout';
import styles from './Portfolio.module.css';

function Portfolio({}: any): JSX.Element {
    return <div className={styles.general}>portfolio</div>;
}

export default withLayout(Portfolio);
