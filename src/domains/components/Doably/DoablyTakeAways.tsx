import React from "react";
import styles from './Doably.module.scss'

const DoablyTakeAways: React.FC = () => {
  return (
    <section className={styles.takeAwaysSection}>
      <div className={styles.takeAwaysContainer}>
        <h2 className={styles.takeAwaysTitle}>TAKEAWAYS</h2>
        <p className={styles.takeAwaysParagraph}>
          <b>Research is essential</b> for solving complex UX problems. I couldn’t have designed a product users love without involving the people who would actually use it. For example, user interviews revealed that many struggled with juggling work and personal tasks, which led us to prioritize features like templates and default pages for quicker setup.
        </p>
        <p className={styles.takeAwaysParagraph}>
          Creating personas was also a game changer. Understanding users’ needs and pain points helped me design a smooth, end-to-end experience that really works for them.
        </p>
      </div>
    </section>
  )
}

export default DoablyTakeAways;