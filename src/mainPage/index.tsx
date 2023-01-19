import styles from './mainPage.module.css';
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import { ImCard } from './pageComponents/ImCard';
import { WorkExperience } from './pageComponents/WorkExperience';
import { Education } from './pageComponents/Education';
import { SkillToolsInterests } from './pageComponents/SkillToolsInterests';
import { Languages } from './pageComponents/Languages';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import ModalContacts from '@/components/ModalContacts';

export interface MainPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function MainPage({ ...props }: MainPageProps): JSX.Element {
    const { langValue, toggleModalOpen } = useContext(AppContext);
    return (
        <div
            className={styles.main}
            {...props}>
            <div className={styles.mainWrapper}>
                <ImCard langValue={langValue} />
                <WorkExperience langValue={langValue} />
                <Education langValue={langValue} />
            </div>
            <div className={styles.sideWrapper}>
                <SkillToolsInterests langValue={langValue.skills} />
                <SkillToolsInterests langValue={langValue.tools} />
                <SkillToolsInterests langValue={langValue.interests} />
                <Languages />
            </div>
            <ModalContacts
                open={toggleModalOpen}
                langValue={langValue.modalContacts}
            />
        </div>
    );
}
