import React from "react";
import styles from "../../../../pages/Pages.module.scss"

const WorkDescription: React.FC = () => {
  return (
    <div className={styles.informationBlock}>
      <h1 className={styles.mainTitle}>
        <span className={styles.name}>Hi, I'm Anastasiia</span> 👋
      </h1>

      <p className={styles.description}>
        I’m a product designer with over six years of experience <b>transforming the “How <br/> do I do this?” moments
        into “That was easy!”</b>—because life’s complicated <br /> enough without confusing interfaces.
      </p>
    </div>
  )
}

export default WorkDescription;