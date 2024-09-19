import React from "react";
import styles from './ReconHub.module.scss'
import MySlider from "../Slider/MySlider.tsx";

const ReconHubPersonas: React.FC = () => {
  return (
    <section className={styles.personasSection}>
      <div className={styles.personasContainer}>
        <h2 className={styles.personasTitle}>PERSONAS</h2>
        <p className={styles.personasParagraph}>
          We created <b>user personas</b> based on key roles like <b>Accountant, Controller, Service Desk Agent</b>, and <b>Supporter</b>. Each persona reflected their daily tasks, goals, and challenges, helping us understand their needs as we worked on the redesign.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <MySlider/>
      </div>
    </section>
  )
}

export default ReconHubPersonas;