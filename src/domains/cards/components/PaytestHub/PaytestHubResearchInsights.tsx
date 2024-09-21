import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubIntroduction: React.FC = () => {
  return (
    <section className={styles.reconHubIntroductionSection}>
      <h2 className={styles.researchTitle}>RESEARCH</h2>
      <div className={styles.reconHubIntroductionContainer}>

        <div className={styles.leftColumn}>
          <p className={styles.aboutIntroduction}>
            <span>Too technical terminology</span> <br/>
            Most users complain about unclear documentation and many features that are not immediately obvious.
          </p>

          <p className={styles.aboutIntroduction}>
            <span>Lack of reporting</span><br/>
            Users need to analyze test cases to make them more effective. They need a granular information about the
            test runs.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.aboutIntroduction}>
            <span>Onboarding process is confusing</span> <br/>
            It takes too many steps and technical assistance to get started. It creates a problem not only for our users
            but also for the business itself. We spend a lot of hours by IT support.
          </p>

          <p className={styles.aboutIntroduction}>
            <span>Low efficiency</span> <br/>
            Complains of difficulty in use. Users have to do a lot of clicking and do a lot of attachment for the tests.
          </p>

        </div>
      </div>
    </section>
  )
}

export default PaytestHubIntroduction;