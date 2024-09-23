import React from "react";
import styles from './PaytestHub.module.scss'

const PaytestHubScreens: React.FC = () => {
  return (
    <section className={styles.screensSection}>
      <div className={styles.screensContainer}>
        <h2 className={styles.screensTitle}>SCREENS</h2>
        <p className={styles.screensParagraph}>
          We decided to use most of the components from our company library. This way we can keep similar look and feel
          of our products.
        </p>
        <p className={styles.screensParagraph}>
          During the user interviews one of the most common complains was difficulty in use.
          In our design we added in-line editing feature, that reduced task time to almost 30%.
          Step templates on the right side also saved our users time. In addition, it is helpful for the new users who
          is still learning terminology and logic.
        </p>
        <p className={styles.screensParagraph}>
          We found out that some features that we created in Figma were time-consuming...
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imageSize} src="src/assets/images/paytesthub-screens.png" alt="Screens img"/>
      </div>
    </section>
  )
}

export default PaytestHubScreens;