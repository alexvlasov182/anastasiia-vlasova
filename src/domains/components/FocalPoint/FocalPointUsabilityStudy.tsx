import React from "react";
import styles from './FocalPoint.module.scss'

const FocalPointUsabilityStudy: React.FC = () => {
  return (
    <section className={styles.resultSection}>
      <div className={styles.numberdSection}>
        <h2 className={styles.resultTitle}>USABILITY STUDY</h2>
        <p className={styles.resultText}>
          I created an interactive prototype to show our future product to potential users so that we can test usability before creating detailed screens.
          Here are our findings after conducting a usability testing:
        </p>

        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>1</div>
          <p className={styles.resultText}>The first thing users want to see is not a list of categories, but a dashboard that helps managers measure the effectiveness of their work.</p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>2</div>
          <p className={styles.resultText}>Vertical navigation was better because it helped users find the page they were looking for faster.</p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>3</div>
          <p className={styles.resultText}>We had to simplify the tables by adding icons and two-line strings because they were overloaded with information.</p>
        </div>
      </div>
    </section>
  )
}

export default FocalPointUsabilityStudy;