import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubUsabilityStudy: React.FC = () => {
  return (
    <section className={styles.usabilitySection}>
      <div className={styles.usabilityContainer}>
        <h2 className={styles.usabilityTitle}>USABILITY STUDY</h2>
        <p className={styles.usabilityParagraph}>
          After finishing the first design interaction, we conducted <b>8 usability studies</b>. Most of our decisions were right and easy to understand. But there were a few interesting BUTs.
        </p>
        <ul className={styles.mainList}>
          <li className={styles.listItem}>Almost all users <b>forgot to save their changes</b>. It was a big milestone in development, so we decided to prove if the autosave feature is worth creating it. To do so, we created Figma prototype to test it and save time for the development.</li>
          <li className={styles.listItem}>We wanted to save space by adding tabs to the main block. But the users had to jump between tabs and <b>wanted to see Tree and Script at the same time.</b></li>
        </ul>
      </div>
    </section>
  )
}

export default PaytestHubUsabilityStudy;