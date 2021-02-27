import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExpirienceBar.module.css';

export function ExpirienceBar() {

    const { currentExpirience, expirienceToNextLevel } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExpirience * 100) / expirienceToNextLevel;

    return (
        <header className={styles.expirienceBar}>
            <span>0XP</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={styles.currentExpirience} style={{ left: `${percentToNextLevel}%` }}>   {currentExpirience} XP
                </span>
            </div>
            <span>{expirienceToNextLevel}</span>
        </header>
    )
}