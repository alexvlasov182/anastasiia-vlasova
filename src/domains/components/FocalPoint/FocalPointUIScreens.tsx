import React from "react";
import styles from './FocalPoint.module.scss'
import FocalPointSliderUIScreens from "../Slider/FocalPointSliderUIScreens.tsx";

const FocalPointUIScreens: React.FC = () => {
  return (
    <section className={styles.uiScreensSection}>
      <div className={styles.uiScreenContainer}>
        <h2 className={styles.uiScreenTitle}>UI SCREENS</h2>
        <p className={styles.uiScreenParagraph}>
          After a few more iterations, we designed the final screens with Figma. We conducted A/B testings with a Figma prototype during the process to define the design pattern, elements and colours.<br />
          My aim was a clean, modern look that helps users fulfil their goals quickly.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <FocalPointSliderUIScreens />
      </div>
    </section>
  )
}

export default FocalPointUIScreens;