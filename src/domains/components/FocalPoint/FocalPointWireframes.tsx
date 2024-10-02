import React from "react";
import styles from './FocalPoint.module.scss'
import FocalPointSliderWireframes from "../Slider/FocalPointSliderWireframes.tsx";

const FocalPointWireframes: React.FC = () => {
  return (
    <section className={styles.wireframesSection}>
      <div className={styles.wireframesContainer}>
        <h2 className={styles.wireframesTitle}>WIREFRAMES</h2>
        <p className={styles.wireframesParagraph}>
          Before moving onto high fidelity wireframes, we wanted to get a feel for what the core of the app would look like and get a faster feedback from the team and stakeholders.
          Our product manager and I have created wireframes in Balsamiq in order to have a clearer idea of ​​our future product.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <FocalPointSliderWireframes />
      </div>
    </section>
  )
}

export default FocalPointWireframes;