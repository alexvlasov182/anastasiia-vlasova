import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubTakeAways: React.FC = () => {
  return (
    <section className={styles.takeAwaysSection}>
      <div className={styles.takeAwaysContainer}>
        <h2 className={styles.takeAwaysTitle}>TAKEAWAYS</h2>
        <p className={styles.takeAwaysParagraph}>
          <b>Involve engineering upfront.</b> <br />
          This helps to reduce any rework later on as an understanding of the technical limitations <br/> upfront will help to inform your design strategy.
        </p>
      </div>
    </section>
  )
}

export default PaytestHubTakeAways;