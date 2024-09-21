import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubIntroduction: React.FC = () => {
  return (
    <section className={styles.reconHubIntroductionSection}>
      <div className={styles.reconHubIntroductionContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.introductionTitle}>INTRODUCTION</h2>
          <p className={styles.aboutIntroduction}>
            PaytestHub is a payment test automation tool designed to streamline and fully automate the payment testing process, helping users save time and money.
          </p>

          <h2 className={styles.introductionTitle}>CHALLENGE</h2>
          <p className={styles.aboutIntroduction}>
            Upgrading an existing product required us to improve efficiency step by step without disrupting ongoing operations. Additionally, we faced the challenge of emphasizing the importance of UX, as developers had previously worked on the project without designer input.
          </p>

          <h2 className={styles.introductionTitle}>SOLUTION</h2>
          <p className={styles.aboutIntroduction}>
            We held meetings with developers to explain each design decision, highlight the problems, and show how our solutions addressed them. This helped us gain their trust and ensure that the redesign would be effective and seamlessly integrated into the existing system.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <h2 className={styles.introductionTitle}>ROLE</h2>
          <p className={styles.aboutIntroduction}>
            As the lead designer, I led efforts in user research, wireframing, prototyping, and usability testing.
          </p>
          <h2 className={styles.introductionTitle}>LINK</h2>
          <a className={styles.link} href="https://paytestlab.com/products/paytesthub/" target="_blank" rel="noopener noreferrer">
            https://<br />paytestlab.com/<br />products/paytesthub
          </a>
        </div>
      </div>
    </section>
  )
}

export default PaytestHubIntroduction;