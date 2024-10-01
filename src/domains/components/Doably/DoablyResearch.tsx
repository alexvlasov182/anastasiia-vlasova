import React from "react";
import styles from './Doably.module.scss'

const DoablyResearch: React.FC = () => {
  return (
    <section className={styles.researchSection}>
      <div className={styles.researchContainer}>
        <h2 className={styles.researchTitle}>RESEARCH & PROBLEM DEFINITION</h2>
        <p className={styles.researchParagraph}>
          As a small startup without a user base, we reached out to potential users through social media groups, startup
          forums, and personal networks. We selected participants who fit our target audience—people juggling both
          personal and professional tasks, as well as those interested in time management tools.
          After conducting <b>8 in-depth interviews and a user survey</b>, we validated our hypothesis:
        </p>

        <p className={styles.researchParagraph}>
          <b>“We believe that by providing users with a clear and organized daily task list and offering real-time
            progress tracking and goal achievement analysis, we can significantly increase user productivity and
            motivation levels when using Doably.”</b>
        </p>

        <div>
          <p className={styles.listResearch}>The results backed this up:</p>
          <ul className={styles.mainList}>
            <li className={styles.listItem}>75% said seeing progress makes them feel more effective.</li>
            <li className={styles.listItem}>60% felt scheduling personal time in advance made it easier to balance work
              and life.
            </li>
            <li className={styles.listItem}>80% wanted to share tasks with family or teammates, to stay connected and
              organized.
            </li>
          </ul>
        </div>

        <p className={styles.researchParagraph}>
          These insights confirmed the need for features that track progress, manage time, and encourage collaboration—key to making Doably more effective for users.
        </p>

      </div>
    </section>
  )
}

export default DoablyResearch;