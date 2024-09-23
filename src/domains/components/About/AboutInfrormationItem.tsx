import React from "react";

import styles from '../../../../pages/Pages.module.scss';

const AboutInformationList: React.FC = () => {
  return (
    <div className={styles.informationBlock}>
      <h1 className={styles.mainTitle}>A little bit about myself 💬</h1>

      <p className={styles.description}>
        Hi there, I’m Anastasiia—a product designer with a finance background, passionate about using design to enhance people’s lives.
      </p>

      <p className={styles.description}>
        My journey began with a love for graphic design, inspired by my husband’s engineering enthusiasm. From the moment I started, I was hooked. I found myself waking up at 5 AM just to dive back into my projects—I couldn’t get enough. As I continued to explore design, I became captivated by the challenge of solving complex problems and creating intuitive, user-friendly solutions.
      </p>

      <p className={styles.description}>
        With over six years of experience in UX/UI design, I specialize in transforming intricate ideas into clear, enjoyable user experiences. My goal is always to design with a human touch, ensuring that every project I work on makes a positive difference in people’s lives.
      </p>
    </div>
  );
};

export default AboutInformationList;
