import React from "react";
import styles from './FocalPoint.module.scss'

const FocalPointUserFlow: React.FC = () => {
  return (
    <section className={styles.personasSection}>
      <div className={styles.personasContainer}>
        <h2 className={styles.personasTitle}>USER FLOW</h2>
        <p className={styles.personasParagraph}>
          The pain points of our potential users were mainly associated with <b>complex navigation</b>. So, the next step was to create a user flow that helps us see all the possible ways for users to achieve the goal.
        </p>

        <p className={styles.personasParagraph}>
          Creating a user flow also helped us see gaps in navigation and reduce the number of screens. We divided our application into main 10 panels, for which we created user flows.
        </p>
      </div>
    </section>
  )
}

export default FocalPointUserFlow;