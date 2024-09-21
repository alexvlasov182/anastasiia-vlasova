import React from 'react';

import styles from './PaytestHub.module.scss';

const PaytestHubResults: React.FC = () => {
  return (
    <section className={styles.resultSection}>
      <div className={styles.numberdSection}>
        <h2 className={styles.resultTitle}>RESULTS</h2>
        <p className={styles.resultText}>
          For this project, we used the following metrics to gauge the success of the redesign, with most measurements tracked using Datadog:
        </p>

        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>1</div>
          <p className={styles.resultText}><b>Efficiency Improvement:</b> Time to complete key tasks, initially averaging 4:30 minutes, decreased by 30%.</p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>2</div>
          <p className={styles.resultText}><b>User Satisfaction:</b> Satisfaction scores from post-launch surveys increased by 25%.</p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>3</div>
          <p className={styles.resultText}><b>Error Rate:</b> Errors in test automation reduced by 30%.</p>
        </div>
      </div>
    </section>

  )
}

export default PaytestHubResults;