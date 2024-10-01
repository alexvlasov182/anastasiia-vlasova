import React from "react";
import styles from './Doably.module.scss'

import DoablySliderUIScreens from "../Slider/DoablySliderUIScreens.tsx";

const DoablyUIScreens: React.FC = () => {
  return (
    <section className={styles.personasSection}>
      <div className={styles.personasContainer}>
        <h2 className={styles.personasTitle}>WIREFRAMES</h2>
        <p className={styles.personasParagraph}>
          In the final step, we created <b>high-fidelity screens</b>. We simplified the design by removing unnecessary UI elements and kept everything consistent across the app. This helped achieve a clean and spacious layout. A strong typographic hierarchy was used to make sure everything is easy to read and navigate, improving the overall user experience.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <DoablySliderUIScreens />
      </div>
    </section>
  )
}

export default DoablyUIScreens;