import React from "react";
import styles from "./About.module.scss";

const AboutValues: React.FC = () => {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.valuesTitle}>My Values</h2>
          <p className={styles.aboutValues}>
            🌟 <strong>Embrace curiosity</strong>
            <br />I believe in always exploring new ideas and perspectives.
            Curiosity fuels growth and innovation, and it’s through questioning
            and discovering that we find the most exciting opportunities.
          </p>
          <p className={styles.aboutValues}>
            💬 <strong>Communicate openly</strong>
            <br />
            Open and honest communication is key to building strong
            relationships and understanding each other.
          </p>
          <p className={styles.aboutValues}>
            ❤️ <strong>Love what you do</strong>
            <br />
            Finding joy in your work drives success and makes the journey
            fulfilling. Loving your craft brings out your best.
          </p>

          <div className={styles.currentProject}>
            <h2 className={styles.valuesTitle}>My current project</h2>
            <p className={styles.aboutValues}>
              I'm currently working on a sustainability tool designed to help
              users reduce food waste while saving time and money. Coming
              soon...
            </p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h2 className={styles.valuesTitle}>Interests</h2>
          <p className={styles.aboutValues}>
            🐶 <strong>Dogs</strong>
            <br />
            I’m a dog lover through and through—nothing beats a wagging tail and
            some puppy love.
          </p>
          <p className={styles.aboutValues}>
            🌿 <strong>Plants</strong>
            <br />
            My home is a mini jungle, and I’m always on the lookout for the next
            green addition (don’t tell my husband).
          </p>
          <p className={styles.aboutValues}>
            🥾 <strong>Hiking</strong>
            <br />
            Whether it’s a mountain trail or a walk in the woods, I’m happiest
            outdoors.
          </p>
          <p className={styles.aboutValues}>
            🐷 <strong>Pigs</strong>
            <br />
            My favorite animal is a pig, and yes, my colleagues worry I might
            “overpig” my apartment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
