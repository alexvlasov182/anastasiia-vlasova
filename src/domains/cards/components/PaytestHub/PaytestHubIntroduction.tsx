import React from "react";
import styles from './ReconHub.module.scss'

const ReconHubIntroduction: React.FC = () => {
  return (
    <section className={styles.reconHubIntroductionSection}>
      <div className={styles.reconHubIntroductionContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.introductionTitle}>INTRODUCTION</h2>
          <p className={styles.aboutIntroduction}>
            ReconHub is a reconciliation software that automates accounting for payment transactions. Its main goal is to simplify the reconciliation process for businesses by reducing manual work and improving accuracy.
          </p>

          <h2 className={styles.introductionTitle}>CHALLENGE</h2>
          <p className={styles.aboutIntroduction}>
            Redesigning an existing product meant improving efficiency without disrupting users’ daily work. We had to introduce changes smoothly, ensuring everything kept running seamlessly.
          </p>

          <h2 className={styles.introductionTitle}>SOLUTION</h2>
          <p className={styles.aboutIntroduction}>
            We took a phased approach, making gradual improvements like enhancing automated transaction matching and exceptions monitoring. We added real-time reporting and simplified the UI for faster navigation. Constant user feedback helped us improve both usability and efficiency without interrupting workflows.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <h2 className={styles.introductionTitle}>ROLE</h2>
          <p className={styles.aboutIntroduction}>
            As the senior product designer, I handled everything from user research and design to usability testing and handoff to engineering. I also contributed to marketing efforts to promote the product.
          </p>
          <h2 className={styles.introductionTitle}>LINK</h2>
          <a className={styles.link} href="https://reconhub.abrantix.com/en/product/reconhub" target="_blank" rel="noopener noreferrer">
            https://<br />reconhub.abrantix.com/en/<br />product/reconhub
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReconHubIntroduction;