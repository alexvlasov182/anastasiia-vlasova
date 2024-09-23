import React from "react";
import styles from './FocalPoint.module.scss'

const FocalPointResearch: React.FC = () => {
  return (
    <section className={styles.researchSection}>
      <div className={styles.researchContainer}>
        <h2 className={styles.researchTitle}>RESEARCH</h2>
        <p className={styles.researchParagraph}>
          As a first step, we started with a user research. Since this was a new area for our design team, we <b>conducted a procurement research and analyzed the main competitors</b>.
        </p>

        <p className={styles.researchParagraph}>
          <b>Conducting 8 user interviews</b> through our professional network and online forums provided invaluable insights. Users shared their experiences and challenges, confirming that <b>while they’re comfortable with large databases, they’re eager for a more streamlined approach to save time</b>.
        </p>

        <p className={styles.researchParagraph}>
          Our findings helped us realize that not all planned features were essential, guiding us in prioritizing our MVP.
          Additionally, we performed a <b>SWOT analysis</b> of competitor features in the context of our business. This analysis not only highlighted the strengths and weaknesses of competitors but also revealed opportunities for our product to stand out and address gaps in the market.
        </p>
      </div>
    </section>
  )
}

export default FocalPointResearch;