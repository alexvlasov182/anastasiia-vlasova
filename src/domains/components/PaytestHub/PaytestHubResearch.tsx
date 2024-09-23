import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubResearch: React.FC = () => {
  return (
    <section className={styles.researchSection}>
      <div className={styles.researchContainer}>
        <h2 className={styles.researchTitle}>RESEARCH</h2>
        <p className={styles.researchParagraph}>
          In the initial stage, we conducted <b>6 user interviews</b> to gather feedback on PaytestHub. Since the product was already in use, we discussed its strengths and issues with current users.
        </p>

        <p className={styles.researchParagraph}>
          After collecting the interview recordings, I worked with my teammates to conduct <b>affinity mapping</b>. We synthesized the identified pains, grouping them into common themes and key features of the platform.
        </p>
      </div>
    </section>
  )
}

export default PaytestHubResearch;