import React from "react";
import styles from './FocalPoint.module.scss'

const FocalPointTakeAways: React.FC = () => {
  return (
    <section className={styles.takeAwaysSection}>
      <div className={styles.takeAwaysContainer}>
        <h2 className={styles.takeAwaysTitle}>TAKEAWAYS</h2>
        <p className={styles.takeAwaysParagraph}>
          This project took nearly a year to ideate, design, test, and implement. It was a huge learning experience for
          me and the entire FocalPoint team.
          Afterwards FocalPoint raised $3 Million investments and now helps enterprise customers make procurement
          process easier and efficient.
        </p>
        <p className={styles.takeAwaysParagraph}>
          In my opinion, the perfect motto for this project should be <b>“It’s easy to come up with design ideas, but it’s hard to solve the right problem.”</b> It's important to take the time to research and interview users so that you know exactly who you are creating for.
        </p>
        <p className={styles.takeAwaysParagraph}>
          This CRM system’s taught me to work with large databases.  We have automated the process of analyzing data on purchases of giant companies. The project was successfully presented to customers and now is in use by large companies.
        </p>
      </div>
    </section>
  )
}

export default FocalPointTakeAways;