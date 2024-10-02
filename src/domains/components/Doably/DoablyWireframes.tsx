import React from "react";
import styles from './Doably.module.scss'
import DoablySliderWireframes from "../Slider/DoablySliderWireframes.tsx";

const DoablyWireframes: React.FC = () => {
  return (
    <section className={styles.wireframesSection}>
      <div className={styles.wireframesContainer}>
        <h2 className={styles.wireframesTitle}>WIREFRAMES</h2>
        <p className={styles.wireframesParagraph}>
          Using the User Flows, we created the first low-fidelity wireframes to <b>quickly map out Doably’s structure</b>.
          These simple designs allowed us to run <b>usability tests</b> and spot problems early on. For example, users had
          trouble finding the task filters, and the dashboard felt cluttered with too much information. We made
          adjustments to make things clearer and easier to navigate.
        </p>

        <p className={styles.wireframesParagraph}>
          These wireframes also helped us stay on the same page with our stakeholders. They could give feedback early without us spending too much time on detailed designs. This saved time and made sure we were heading in the right direction before moving forward.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <DoablySliderWireframes/>
      </div>
    </section>
  )
}

export default DoablyWireframes;