import React from "react";
import styles from './Doably.module.scss'

const DoablyHero: React.FC = () => {
  return (
    <section className={styles.doablySection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Doably</h1>
        <h2 className={styles.subtitle}>Tool for managing personal and business life</h2>
        <div className={styles.imageWrapper}>
          <img
            src="/images/doably/doably-big.png"
            alt="ReconHub Preview"
            className={styles.projectImage}
          />
        </div>
      </div>
    </section>
  )
}

export default DoablyHero;