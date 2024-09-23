import React from "react";
import styles from './ReconHub.module.scss'

const ReconHubResearch: React.FC = () => {
  return (
    <section className={styles.researchSection}>
      <div className={styles.researchContainer}>
          <h2 className={styles.researchTitle}>RESEARCH</h2>
          <p className={styles.researchParagraph}>
            We started by <b>interviewing 10 key customers</b> across different roles and industries to understand their specific needs and challenges. We asked about their roles, why they chose ReconHub, key pain points, and the product’s greatest strengths. This helped us align our design decisions with real-world requirements. <br />
            Afterward, we conducted <b>competitor analysis</b> and explored <b>market trends</b>.
          </p>

          <div>
            <p className={styles.listResearch}>Results & Takeaways:</p>
            <ul className={styles.mainList}>
              <li className={styles.listItem}><b>Limited Focus</b>: Most reconciliation applications primarily centered around accounting functionalities, overlooking the crucial aspect of reconciliation automation—a key area we aimed to address.</li>
              <li className={styles.listItem}><b>Implementation Challenges</b>: The implementation is often time-consuming and frustrating, requiring constant involvement from the IT team, which has a negative impact on the business.</li>
              <li className={styles.listItem}><b>Error Sensitivity</b>: The existing systems demonstrated sensitivity to errors, leading to potential inaccuracies in reconciled data.</li>
            </ul>
          </div>


      </div>
    </section>
  )
}

export default ReconHubResearch;