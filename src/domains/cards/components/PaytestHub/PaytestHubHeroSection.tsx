import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubHeroSection: React.FC = () => {
  return (
    <section className={styles.reconHubSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>PaytestHub</h1>
        <h2 className={styles.subtitle}>Payment software testing tool</h2>
        <div className={styles.imageWrapper}>

        </div>
      </div>
    </section>
  )
}

export default PaytestHubHeroSection;