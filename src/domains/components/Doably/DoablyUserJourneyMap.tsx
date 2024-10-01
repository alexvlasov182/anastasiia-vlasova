import React from "react";
import styles from './Doably.module.scss'

const DoablyUserJourneyMap: React.FC = () => {
  return (
    <section className={styles.journeySection}>
      <div className={styles.journeyContainer}>
        <h2 className={styles.journeyTitle}>USER JOURNEY MAP</h2>
        <p className={styles.journeyParagraph}>
          After researching and creating our user personas, we mapped out a <b>User Journey</b> to see how people would
          use Doably, what emotions they might feel, and what challenges could come up. This helped us figure out the
          best way to meet their needs.
        </p>
        <p className={styles.journeyParagraph}>
          One key decision was to add <b>ready-made templates</b> and <b>default pages</b> to the app. This way, users
          can start right away without having to set up everything from scratch. It makes things much easier, letting
          them jump in and start organizing their tasks and projects quickly.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imageSize} src="src/assets/images/doably/doably-user-map.png"
             alt="User Journey Map"/>
      </div>
    </section>
  )
}

export default DoablyUserJourneyMap;