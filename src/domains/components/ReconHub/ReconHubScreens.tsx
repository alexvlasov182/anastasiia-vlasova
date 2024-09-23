import React from "react";
import styles from './ReconHub.module.scss'

const ReconHubScreens: React.FC = () => {
  return (
    <section className={styles.screensSection}>
      <div className={styles.screensContainer}>
        <h2 className={styles.screensTitle}>SCREENS</h2>
        <p className={styles.screensParagraph}>
          Since we wanted to keep the product's familiar look and feel, we decided to skip wireframing and jump straight into designing polished screens.
        </p>
        <p className={styles.screensParagraph}>
          The big challenge was figuring out how to implement these new designs—whether to do it all at once or take it step by step. After talking with developers and managers, we chose the gradual route. We started with small, simple elements like the navigation menu, breadcrumbs, and buttons. This way, we could introduce changes smoothly without disrupting the user experience.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imageSize} src="src/assets/images/screens-img.png" alt="Screens img" />
      </div>
    </section>
  )
}

export default ReconHubScreens;