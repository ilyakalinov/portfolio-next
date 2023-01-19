import MainPage from '@/mainPage';
import { withLayout } from '../Layout/Layout';

export function Home(): JSX.Element {
    return <MainPage />;
}

export default withLayout(Home);
