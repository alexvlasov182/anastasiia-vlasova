import React from "react";
import styles from './FocalPoint.module.scss'
import FocalPointSlider from "../Slider/FocalPointSlider.tsx";

const FocalPointPersonas: React.FC = () => {
  return (
    <section className={styles.personasSection}>
      <div className={styles.personasContainer}>
        <h2 className={styles.personasTitle}>PERSONAS</h2>
        <p className={styles.personasParagraph}>
          The analysis of the in-depth interviews allowed us to create <b>2 user archetypes</b>, thanks to which we could better empathize with our potential customers. The creation of these personas was primarily driven by their contrasting levels of experience in the field. During the further design stages, we often referred to the figures of Kristin and Robert.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <FocalPointSlider/>
      </div>
    </section>
  )
}

export default FocalPointPersonas;