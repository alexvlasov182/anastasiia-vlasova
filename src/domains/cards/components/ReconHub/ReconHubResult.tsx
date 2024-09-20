import React from 'react';

import styles from './ReconHub.module.scss';

const ReconHubResult: React.FC = () => {
  return (
    <section className={styles.resultSection}>
      <div className={styles.numberdSection}>
        <h2 className={styles.resultTitle}>RESULT</h2>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>1</div>
          <p className={styles.resultText}>Smooth UI Transition: Changes to a few elements were well-received, with users
            adapting quickly. Adoption
            rate: 90%.</p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>2</div>
          <p className={styles.resultText}>Smooth UI Transition: Changes to a few elements were well-received, with users adapting quickly. Adoption
            rate: 90%.</p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>3</div>
          <p className={styles.resultText}>Streamlined Transaction Matching: Collaboration with the support team improved the transaction matching
            flow, reducing matching time by 30% and boosting overall user efficiency by 20%.</p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>4</div>
          <p className={styles.resultText}>Support Hours Slashed: Improvements in the user journey cut support hours from 70 to 30 per month, a 57%
            reduction.</p>
        </div>
      </div>
    </section>

  )
}

export default ReconHubResult;