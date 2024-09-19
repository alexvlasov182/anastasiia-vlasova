import React from "react";
import styles from './ReconHub.module.scss'

const ReconHubMetrics: React.FC = () => {
  return (
    <section className={styles.metricsSection}>
      <div className={styles.metricsContainer}>
        <h2 className={styles.metricsTitle}>METRICS</h2>
        <p className={styles.metricsParagraph}>
          Together with the team, I used data from the previous product version to set business bottom line. We
          established a comprehensive set of metrics to measure the success of the redesign, including:
          <ul className={styles.mainList}>
            <li className={styles.listItem}><b>Conversion Rates</b>: Key actions such as transaction matching;</li>
            <li className={styles.listItem}><b>User Satisfaction</b>: Quick surveys and support feedback;</li>
            <li className={styles.listItem}><b>Task Efficiency</b>: Time to complete a task;</li>
            <li className={styles.listItem}><b>User Behaviour</b>: Heat map analysis and event tracking.</li>
          </ul>
        </p>
      </div>
    </section>
  )
}

export default ReconHubMetrics;