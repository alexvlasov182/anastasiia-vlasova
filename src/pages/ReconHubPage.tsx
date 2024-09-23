import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import ReconHubHeroSection from "../domains/components/ReconHub/ReconHubHeroSection.tsx";

import styles from './Pages.module.scss'
import ReconHubIntroduction from "../domains/components/ReconHub/ReconHubIntroduction.tsx";
import ReconHubResearch from "../domains/components/ReconHub/ReconHubResearch.tsx";
import ReconHubMetrics from "../domains/components/ReconHub/ReconHubMetrics.tsx";
import ReconHubPersonas from "../domains/components/ReconHub/ReconHubPersonas.tsx";
import ReconHubUserJourneyMap from "../domains/components/ReconHub/ReconHubUserJourneyMap.tsx";
import ReconHubScreens from "../domains/components/ReconHub/ReconHubScreens.tsx";
import ReconHubUsabilityStudy from "../domains/components/ReconHub/ReconHubUsabilityStudy.tsx";
import ReconHubResult from "../domains/components/ReconHub/ReconHubResult.tsx";
import ReconHubTakeAways from "../domains/components/ReconHub/ReconHubTakeAways.tsx";
import ScrollToTop from "../domains/components/ScrollToTop/ScrollToTop.tsx";

const ReconHubPage: React.FC = () => {
  return (
    <PageLayout>
      <ReconHubHeroSection />
      <div className={styles.container}>
        <ReconHubIntroduction />
        <ReconHubResearch />
        <ReconHubMetrics />
        <ReconHubPersonas />
        <ReconHubUserJourneyMap />
        <ReconHubScreens />
        <ReconHubUsabilityStudy />
        <ReconHubResult />
        <ReconHubTakeAways />
      </div>
      <ScrollToTop />
    </PageLayout>
  );
};

export default ReconHubPage;
