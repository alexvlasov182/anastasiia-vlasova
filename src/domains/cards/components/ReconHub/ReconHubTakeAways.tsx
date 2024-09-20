import React from "react";
import styles from './ReconHub.module.scss'

const ReconHubTakeAways: React.FC = () => {
  return (
    <section className={styles.takeAwaysSection}>
      <div className={styles.takeAwaysContainer}>
        <h2 className={styles.takeAwaysTitle}>TAKEAWAYS</h2>
        <p className={styles.takeAwaysParagraph}>
          <span className={styles.takeAawaysMainColor}>Design is a constant iteration of improving the experience for the end user.</span><br />
          <b>User testing shouldn’t stop after development.</b> Continuously gather feedback to refine and enhance the product.<br />
          <b>Always seek out and listen to user feedback.</b> It provides critical insights that drive meaningful improvements and ensure the product meets real needs.
        </p>
      </div>
    </section>
  )
}

export default ReconHubTakeAways;