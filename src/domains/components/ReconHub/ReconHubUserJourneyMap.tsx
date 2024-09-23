import React from "react";
import styles from './ReconHub.module.scss'

const ReconHubUserJourneyMap: React.FC = () => {
  return (
    <section className={styles.journeySection}>
      <div className={styles.journeyContainer}>
        <h2 className={styles.journeyTitle}>USER JOURNEY MAP</h2>
        <p className={styles.journeyParagraph}>
          One of the key areas we focused on was <b>improving the support process</b>. Through interviews with our sales team and current clients, we found that the journey from sales to project installation was too complex and time-consuming. By mapping out the entire user journey, we identified where the biggest pain points were and how we could streamline the process to make it faster and more efficient.
        </p>
        <p className={styles.journeyParagraph}>
          Following these insights, we added a small subproject to enhance the user experience from signing the contract to using ReconHub. We <b> implemented automated surveys </b> to collect information more easily and <b>created a Learn Center</b> where users could quickly find answers to their questions.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imageSize} src="src/assets/images/recon-hub/user-journey-map-img.png" alt="User Journey Map" />
      </div>
    </section>
  )
}

export default ReconHubUserJourneyMap;