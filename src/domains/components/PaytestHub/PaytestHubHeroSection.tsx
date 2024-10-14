import React from "react";
import styles from "./PaytestHub.module.scss";

const PaytestHubHeroSection: React.FC = () => {
  return (
    <section className={styles.paytestHubSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>PaytestHub</h1>
        <h2 className={styles.subtitle}>Payment software testing tool</h2>
        <div className={styles.imageWrapper}>
          <img
            src="/images/paytest-hub/paytesthub-hero-img.png"
            alt="ReconHub Preview"
            className={styles.projectImage}
          />
        </div>
      </div>
    </section>
  );
};

export default PaytestHubHeroSection;
