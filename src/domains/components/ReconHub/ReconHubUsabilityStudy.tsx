import React from "react";
import styles from './ReconHub.module.scss'

const ReconHubUsabilityStudy: React.FC = () => {
  return (
    <section className={styles.usabilitySection}>
      <div className={styles.usabilityContainer}>
        <h2 className={styles.usabilityTitle}>USABILITY STUDY</h2>
        <p className={styles.usabilityParagraph}>
          During usability studies, we used DataDog to track user interactions and gather insights.
        </p>
        <ul className={styles.mainList}>
          <li className={styles.listItem}><b>Multiple Tabs for Matching Transactions:</b> Users had to open 3-4 tabs and jump between them to ensure correct reconciliation.</li>
          <li className={styles.listItem}><b>Total Amount Clicks:</b> Frequent clicks on the Total amount, highlighting its importance.</li>
          <li className={styles.listItem}><b>Organizational Hierarchy Interaction:</b> Clicked 3 out of 5 times, emphasizing its significance in navigation.</li>
        </ul>
      </div>
    </section>
  )
}

export default ReconHubUsabilityStudy;