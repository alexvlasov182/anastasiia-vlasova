import React from "react";
import styles from "./About.module.scss"

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.textColumn}>
          <h2 className={styles.titleAbout}>A little bit about myself</h2>
          <p className={styles.aboutDescription}>
            Hi there, I’m Anastasiia—a product designer with a finance background, passionate about using design to
            enhance people’s lives.
          </p>
          <p className={styles.aboutDescription}>My journey began with a love for graphic design, inspired by my
            husband’s engineering enthusiasm. From the moment I started, I was hooked. I found myself waking up at 5 AM
            just to dive back into my projects—I couldn’t get enough. As I continued to explore design, I became
            captivated by the challenge of solving complex problems and creating intuitive, user-friendly solutions.</p>
          <p className={styles.aboutDescription}>With over six years of experience in UX/UI design, I specialize in
            transforming intricate ideas into clear, enjoyable user experiences. My goal is always to design with a
            human touch, ensuring that every project I work on makes a positive difference in people’s lives.</p>
        </div>
        <div className={styles.imageColumn}>
          <img
            src="/images/img-about-nastiia.png"
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;