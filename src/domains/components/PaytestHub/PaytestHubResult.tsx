import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubResult: React.FC = () => {
  return (
    <section className={styles.paytestHubResultSection}>
      <div className={styles.paytestHubResultContainer}>
        <h2 className={styles.paytestHubResultTitle}>RESULT</h2>
        <p className={styles.paytestHubResultParagraph}>
          Considering the answers we collected during the usability tests, we updated our screens and added scripts to the same page. Now users can hover on the test step and immediately see the corresponding script line.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imageSize} src="src/assets/images/paytest-hub/result-img.png" alt="Screens img"/>
      </div>
    </section>
  )
}

export default PaytestHubResult;