import React from "react";

import PageLayout from "../components/Layout/PageLayout";
import AboutInformationList from "../domains/cards/components/AboutInfrormationItem.tsx";

import styles from "./Pages.module.scss";


const About: React.FC = () => {
  return (
    <PageLayout>
      <div className={styles.contentPadding}>
        <AboutInformationList />
      </div>
    </PageLayout>
  );
};

export default About;
