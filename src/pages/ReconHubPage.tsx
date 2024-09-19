import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import ReconHubHeroSection from "../domains/cards/components/ReconHub/ReconHubHeroSection.tsx";

import styles from './Pages.module.scss'
import ReconHubIntroduction from "../domains/cards/components/ReconHub/ReconHubIntroduction.tsx";
import ReconHubResearch from "../domains/cards/components/ReconHub/ReconHubResearch.tsx";
import ReconHubMetrics from "../domains/cards/components/ReconHub/ReconHubMetrics.tsx";

const ReconHubPage: React.FC = () => {
  return (
    <PageLayout>
      <ReconHubHeroSection />
      <div className={styles.container}>
        <ReconHubIntroduction />
        <ReconHubResearch />
        <ReconHubMetrics />
      </div>
    </PageLayout>
  );
};

export default ReconHubPage;
