import React from "react";
import styles from './FocalPoint.module.scss'

const FocalPointHero: React.FC = () => {
  return (
    <section className={styles.focalPointSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Focal Point</h1>
        <h2 className={styles.subtitle}>Tool for procurement management</h2>
        <div className={styles.imageWrapper}>
          <img
            src="src/assets/images/focal-point/fc-hero-image-section.jpg"
            alt="ReconHub Preview"
            className={styles.projectImage}
          />
        </div>
      </div>
    </section>
  )
}

export default FocalPointHero;