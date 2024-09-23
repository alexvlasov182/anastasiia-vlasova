import React from 'react';

import styles from './ReconHub.module.scss';

const ReconHubResult: React.FC = () => {
  return (
    <section className={styles.resultSection}>
      <div className={styles.numberdSection}>
        <h2 className={styles.resultTitle}>RESULT</h2>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>1</div>
          <p className={styles.resultText}><b>Smooth UI Transition:</b> Changes to a few elements were well-received, with users
            adapting quickly. <b>Adoption
            rate: 90%.</b></p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>2</div>
          <p className={styles.resultText}><b>Enhanced Visibility:</b> Adding Total Amount and Organizational Hierarchy by default led to <b>a 30% increase in user engagement.</b></p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>3</div>
          <p className={styles.resultText}><b>Streamlined Transaction Matching:</b> Collaboration with the support team improved the transaction matching
            flow, <b>reducing matching time by 30%</b> and boosting overall <b>user efficiency by 20%.</b></p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>4</div>
          <p className={styles.resultText}><b>Support Hours Slashed:</b> Improvements in the user journey cut support hours from 70 to 30 per month, <b>a 57%
            reduction.</b></p>
        </div>
      </div>
    </section>

  )
}

export default ReconHubResult;