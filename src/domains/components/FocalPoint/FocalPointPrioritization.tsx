import React from "react";
import styles from './FocalPoint.module.scss'
import FocalPointSliderPrioritization from "../Slider/FocalPointSliderPrioritization.tsx";

const FocalPointPrioritization: React.FC = () => {
  return (
    <section className={styles.personasSection}>
      <div className={styles.personasContainer}>
        <h2 className={styles.personasTitle}>PRIORITIZATION PLOTTING</h2>
        <p className={styles.personasParagraph}>
          In order to build a successful and solid MVP for Focal Point, we had to identify the most important features. So, we’ve created a prioritization matrix that shows the relative importance of a set of items based on two weighted criteria - Priority and Effort.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <FocalPointSliderPrioritization />
      </div>
    </section>
  )
}

export default FocalPointPrioritization;