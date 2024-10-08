import React from "react";
import styles from './FocalPoint.module.scss'

const FocalPointPrioritization: React.FC = () => {
  return (
    <section className={styles.prioritizationSection}>
      <div className={styles.prioritizationContainer}>
        <h2 className={styles.prioritizationTitle}>PRIORITIZATION PLOTTING</h2>
        <p className={styles.prioritizationParagraph}>
          In order to build a successful and solid MVP for Focal Point, we had to identify the most important features. So, we’ve created a prioritization matrix that shows the relative importance of a set of items based on two weighted criteria - Priority and Effort.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imageSize} src="/images/focal-point/prioritization-img-1.png" alt="PRIORITIZATION img"/>
      </div>
    </section>
  )
}

export default FocalPointPrioritization;