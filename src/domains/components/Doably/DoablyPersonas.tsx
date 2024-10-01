import React from "react";
import styles from './Doably.module.scss'
import DoablySliderPersonas from "../Slider/DoablySliderPersonas.tsx";


const DoablyPersonas: React.FC = () => {
  return (
    <section className={styles.personasSection}>
      <div className={styles.personasContainer}>
        <h2 className={styles.personasTitle}>PERSONAS</h2>
        <div>
          <p className={styles.listResearch}>Based on the user research we set up 3 user personas:</p>
          <ul className={styles.mainList}>
            <li className={styles.listItem}><b>Visionary</b>. A person, who thinks about the big picture. They
              strategize and plan projects and tend to dream big.
            </li>
            <li className={styles.listItem}><b>Manager</b>. This person is diplomatic, willing to compromise. These
              types of people are patient, compassionate, and value group success over individual competition.
            </li>
            <li className={styles.listItem}><b>Doer</b>. A person who acts, rather then talking or thinking. The doer is
              all about action. They focus on productivity rather than the big picture.
            </li>
          </ul>
        </div>
        <p className={styles.researchParagraph}>
          Each persona had a scenario that identified a realistic goal the user might have when working with this app. We referred to them throughout the entire product development process.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <DoablySliderPersonas/>
      </div>
    </section>
  )
}

export default DoablyPersonas;