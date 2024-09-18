import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import ReconHubHeroSection from "../domains/cards/components/ReconHub/ReconHubHeroSection.tsx";

import styles from './Pages.module.scss'
import ReconHubIntroduction from "../domains/cards/components/ReconHub/ReconHubIntroduction.tsx";
import ReconHubResearch from "../domains/cards/components/ReconHub/ReconHubResearch.tsx";

const ReconHubPage: React.FC = () => {
  return (
    <PageLayout>
      <ReconHubHeroSection />
      <div className={styles.container}>
        <ReconHubIntroduction />
        <ReconHubResearch />
      </div>
    </PageLayout>
  );
};

export default ReconHubPage;
