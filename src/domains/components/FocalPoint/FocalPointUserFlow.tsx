import React from "react";
import styles from './FocalPoint.module.scss'

const FocalPointUserFlow: React.FC = () => {
  return (
    <section className={styles.userFlowSection}>
      <div className={styles.userFlowContainer}>
        <h2 className={styles.userFlowTitle}>USER FLOW</h2>
        <p className={styles.userFlowParagraph}>
          The pain points of our potential users were mainly associated with <b>complex navigation</b>. So, the next step was to create a user flow that helps us see all the possible ways for users to achieve the goal.
        </p>
        <p className={styles.userFlowParagraph}>
          Creating a user flow also helped us see gaps in navigation and reduce the number of screens. We divided our application into main 10 panels, for which we created user flows.
        </p>
      </div>
    </section>
  )
}

export default FocalPointUserFlow;