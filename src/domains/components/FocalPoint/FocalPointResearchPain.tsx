import React from "react";
import styles from './FocalPoint.module.scss'

const FocalPointResearchPain: React.FC = () => {
  return (
    <section className={styles.resultSection}>
      <div className={styles.numberdSection}>
        <h2 className={styles.resultTitle}>RESEARCH. PAIN POINTS</h2>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>1</div>
          <p className={styles.resultText}><b>Different tools:</b> Procurement managers use various tools for their work.
            It can lead to inefficiencies, data discrepancies, and increased training requirements.<br /> <b>Solution:</b> integrating these tools can save time and improve productivity.</p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>2</div>
          <p className={styles.resultText}><b>Complexity:</b> Procurement tools are often complicated and take a lot of
            time for new employees to learn, causing delays in getting started with their work.<br /> <b>Solution:</b> Simplify user interfaces, provide comprehensive training materials, and offer intuitive workflows.</p>
        </div>
        <div className={styles.numberedItem}>
          <div className={styles.numberCircle}>3</div>
          <p className={styles.resultText}><b>Paper-based processes:</b> Many procurement departments still struggle with
            paperwork, manual data entry, and the lack of automation, leading to inefficiencies and delays. <br /> <b>Solution:</b> make the switch to an automated process easy by letting users attach
            files and import data effortlessly.</p>

        </div>
        <p className={styles.resultText}></p>
      </div>
    </section>
  )
}

export default FocalPointResearchPain;