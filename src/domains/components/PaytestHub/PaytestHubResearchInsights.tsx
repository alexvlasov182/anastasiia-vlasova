import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubResearchInsights: React.FC = () => {
  return (
    <section className={styles.researchSection}>
      <div className={styles.researchContainer}>
        <h2 className={styles.researchTitle}>RESEARCH INSIGHTS</h2>
        <p className={styles.researchParagraph}>
          <span className={styles.mainColorText}>Too technical terminology</span><br/>
          Most users complain about unclear documentation and many features that are not immediately obvious.
        </p>

        <p className={styles.researchParagraph}>
          <span className={styles.mainColorText}>Lack of reporting</span><br/>
          Users need to analyze test cases to make them more effective. They need a granular information about the test
          runs.
        </p>

        <p className={styles.researchParagraph}>
          <span className={styles.mainColorText}>Onboarding process is confusing</span><br/>
          It takes too many steps and technical assistance to get started. It creates a problem not only for our users
          but also for the business itself. We spend a lot of hours by IT support.
        </p>
        <p className={styles.researchParagraph}>
          <span className={styles.mainColorText}>Low efficiency</span><br/>
          Complains of difficulty in use. Users have to do a lot of clicking and do a lot of attachment for the tests.
        </p>


      </div>
    </section>
  )
}

export default PaytestHubResearchInsights;