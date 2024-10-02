import React from "react";
import styles from './FocalPoint.module.scss'

const FocalPointIntroduction: React.FC = () => {
  return (
    <section className={styles.paytestHubIntroductionSection}>
      <div className={styles.paytestHubIntroductionContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.introductionTitle}>INTRODUCTION</h2>
          <p className={styles.aboutIntroduction}>
            Focal Point automates and formalizes procurement best practices in a simple to use solution to develop strategies and plans for maximum value creation.
          </p>

          <h2 className={styles.introductionTitle}>CHALLENGE</h2>
          <p className={styles.aboutIntroduction}>
            Procurement managers use many different tools to get their job done and save data. The variety of tools is confusing and time-consuming.
          </p>

          <h2 className={styles.introductionTitle}>SOLUTION</h2>
          <p className={styles.aboutIntroduction}>
            By offering a centralized and integrated platform, we enhance efficiency, data accessibility, and collaboration within procurement operations. Our solution can be customized and scaled to fit the specific needs of different organizations, ensuring it remains valuable and relevant for procurement professionals in the long run.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <h2 className={styles.introductionTitle}>ROLE</h2>
          <p className={styles.aboutIntroduction}>
            As the lead designer, I was involved in every phase, from identifying problems to delivering and testing final designs. It was my first time leading a project, and although I was nervous at first, I quickly learned the importance of trusting my team. Frequent communication and quick daily meetings were key to our success.
          </p>
          <h2 className={styles.introductionTitle}>LINK</h2>
          <a className={styles.link} href="https://www.getfocalpoint.com/" target="_blank" rel="noopener noreferrer">
            https://<br />www.getfocalpoint.com/
          </a>
        </div>
      </div>
    </section>
  )
}

export default FocalPointIntroduction;