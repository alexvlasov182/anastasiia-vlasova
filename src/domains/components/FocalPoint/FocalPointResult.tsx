import React from "react";
import styles from './FocalPoint.module.scss'

const FocalPointResult: React.FC = () => {
  return (
    <section className={styles.screensSection}>
      <div className={styles.screensContainer}>
        <h2 className={styles.screensTitle}>RESULT</h2>
        <p className={styles.screensParagraph}>
          Considering the answers we collected during the usability tests, we updated our screens and added scripts to the same page. Now users can hover on the test step and immediately see the corresponding script line.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imageSize} src="../../../assets/images/paytest-hub/result-img.png" alt="Screens img"/>
      </div>
    </section>
  )
}

export default FocalPointResult;