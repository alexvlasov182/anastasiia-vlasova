import React from "react";
import styles from "../../../pages/Pages.module.scss";

const WorkDescription: React.FC = () => {
  return (
    <div className={styles.informationBlock}>
      <h1 className={styles.mainTitle}>
        <span className={styles.name}>Hi, I'm Anastasiia</span> 👋
      </h1>

      <p className={styles.description}>
        I’m a product designer with over six years of experience{" "}
        <b>
          transforming the “How do I do this?” moments into “That was easy!”
        </b>
        —because life’s complicated enough without confusing interfaces.
      </p>

      <div className={styles.dividerContainer}>
        <div className={styles.sectionDivider}></div>
      </div>

      <section className={styles.servicesSection}>
        <p className={styles.servicesText}>Domains I have experience with:</p>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceItem}>
            <h3 className={styles.servicesTitle}>CRMs</h3>
            <p className={styles.servicesText}>
              Streamlining complex workflows, making financial operations more
              efficient.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3 className={styles.servicesTitle}>B2B Solutions</h3>
            <p className={styles.servicesText}>
              Creating products that fit business needs and improve user
              satisfaction.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3 className={styles.servicesTitle}>SaaS</h3>
            <p className={styles.servicesText}>
              Improving usability for large-scale businesses with diverse needs.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3 className={styles.servicesTitle}>Startups</h3>
            <p className={styles.servicesText}>
              Bringing ideas to life, where agile, user-driven design made a
              real difference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkDescription;
