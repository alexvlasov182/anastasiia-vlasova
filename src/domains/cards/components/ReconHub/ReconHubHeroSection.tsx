import React from "react";
import styles from './ReconHub.module.scss'

const ReconHubHeroSection: React.FC = () => {
  return (
    <section className={styles.reconHubSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>ReconHub</h1>
        <h2 className={styles.subtitle}>Reconciliation Automation Tool</h2>
        <div className={styles.imageWrapper}>
          <img
            src="src/assets/images/recon-hub-main-image.png"
            alt="ReconHub Preview"
            className={styles.projectImage}
          />
        </div>
      </div>
    </section>
  )
}

export default ReconHubHeroSection;