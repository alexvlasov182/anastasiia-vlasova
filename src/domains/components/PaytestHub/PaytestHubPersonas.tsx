import React from "react";
import styles from './PaytestHub.module.scss'
import PytestHubSlider from "../Slider/PytestHubSlider.tsx";

const PaytestHubPersonas: React.FC = () => {
  return (
    <section className={styles.personasSection}>
      <div className={styles.personasContainer}>
        <h2 className={styles.personasTitle}>PERSONAS</h2>
        <p className={styles.personasParagraph}>
          Based on stakeholder interviews we created 3 types of our current and potential users: <b>Tester</b>, <b>Manager</b>, and
           <b> Test engineer</b>.
        </p>

        <p className={styles.personasParagraph}>
          The main difference lay in their responsibilities and levels of testing knowledge. Our clients use different product features and see the outcome in a different way. That is why we needed to create one product that can satisfy every persona.
          Below are images of our user personas.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <PytestHubSlider/>
      </div>
    </section>
  )
}

export default PaytestHubPersonas;