import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="http://www.github.com/edsoncarlosdvp.png" alt="Edson Carlos" />
            <div>
                <strong>Edson Carlos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1</p>
            </div>
        </div>
    )
}