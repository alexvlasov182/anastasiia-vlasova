import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubBusinessImpact: React.FC = () => {
  return (
    <section className={styles.buisnessImpactSection}>
      <div className={styles.businessImpactContainer}>
        <h2 className={styles.businessImpactTitle}>BUSINESS IMPACT</h2>
        <p className={styles.businessImpactParagraph}>
          By creating a software tool to run tests remotely, we can increase the number of our clients. At the moment, we can only offer them robots. But with PaytestHub, users don't need to install third party tools, everything will be in one place.
        </p>

        <p className={styles.businessImpactParagraph}>
          We can find more customers if we keep everything they need in one place and, most importantly, simplify the process so that more people can use our product.
        </p>
      </div>
    </section>
  )
}

export default PaytestHubBusinessImpact;