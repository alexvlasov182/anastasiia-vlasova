import React from "react";
import styles from './Doably.module.scss'

const DoablyIntroduction: React.FC = () => {
  return (
    <section className={styles.doablyIntroductionSection}>
      <div className={styles.doablyIntroductionContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.introductionTitle}>INTRODUCTION</h2>
          <p className={styles.aboutIntroduction}>
            Doably is a tool that helps people to keep all objects and activities under control. Our users can manage their business and personal projects, time and information.
          </p>

          <h2 className={styles.introductionTitle}>CHALLENGE</h2>
          <p className={styles.aboutIntroduction}>
            The challenge we faced was that our user base was incredibly diverse. It quickly became clear that a one-size-fits-all design wouldn’t cut it. We needed a solution that could cater to the varied needs of our users.
          </p>

          <h2 className={styles.introductionTitle}>SOLUTION</h2>
          <p className={styles.aboutIntroduction}>
            We divided users into smaller groups. This helped us customize Doably’s features so everyone could get the most out of it, whether they were managing work projects or personal tasks.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <h2 className={styles.introductionTitle}>ROLE</h2>
          <p className={styles.aboutIntroduction}>
            With one another designer on this project we were involved in user research to design, prototyping, and testing.
          </p>
          <h2 className={styles.introductionTitle}>LINK</h2>
          <a className={styles.link} href="https://dribbble.com/shots/9179196-Doably-Web-Application" target="_blank" rel="noopener noreferrer">
            https://<br />dribbble.com/<br />
            shots/9179196-Doably-Web-
          </a>
        </div>
      </div>
    </section>
  )
}

export default DoablyIntroduction;