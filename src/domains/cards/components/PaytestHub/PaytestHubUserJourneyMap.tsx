import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubUserJourneyMap: React.FC = () => {
  return (
    <section className={styles.journeySection}>
      <div className={styles.journeyContainer}>
        <h2 className={styles.journeyTitle}>USER JOURNEY MAP</h2>
        <p className={styles.journeyParagraph}>
          The biggest issue was the onboarding process. It took too much time from both sides. From customers’ side it
          was frustration from the beginning and from the business point of view - the onboarding costs were too high.
        </p>
        <p className={styles.journeyParagraph}>
          We conducted more interviews with new customers, stakeholders, and support team to focus more on the
          onboarding process. In this case study I will focus only on the software issues and will skip the hardware
          installation. The main findings are:
        </p>
        <ul className={styles.mainList}>
          <ul>
            New test case - not clear what to enter
            <li className={styles.listItem}>
              add one default test case to show the most common steps;
            </li>
            <li className={styles.listItem}>
              add onboarding hints to guide user at the beginning.
            </li>
          </ul>

          <ul>
            Need to find and copy code from the library
            <li className={styles.listItem}>
              add templates;
            </li>
            <li className={styles.listItem}>
              autocomplete while adding a test step.
            </li>
          </ul>

          <ul>
            Analytics doesn’t help to improve efficiency
            <li className={styles.listItem}>
              add customized reports;
            </li>
            <li className={styles.listItem}>
              view all failed cases at a glance;
            </li>
          </ul>

          <li>
            Ability to share with a team.
          </li>

        </ul>
      </div>

    </section>
  )
}

export default PaytestHubUserJourneyMap;