import React from "react";
import styles from "./FocalPoint.module.scss";

const FocalPointHero: React.FC = () => {
  return (
    <section className={styles.focalPointSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Focal Point</h1>
        <h2 className={styles.subtitle}>Tool for procurement management</h2>
        <div className={styles.imageWrapper}>
          <img
            src="/images/focal-point/focalpoint-hero-img.png"
            alt="ReconHub Preview"
            className={styles.projectImage}
          />
        </div>
      </div>
    </section>
  );
};

export default FocalPointHero;
