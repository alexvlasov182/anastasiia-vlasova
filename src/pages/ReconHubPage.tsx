import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import ReconHubHeroSection from "../domains/cards/components/ReconHub/ReconHubHeroSection.tsx";

import styles from './Pages.module.scss'
import ReconHubIntroduction from "../domains/cards/components/ReconHub/ReconHubIntroduction.tsx";
import ReconHubResearch from "../domains/cards/components/ReconHub/ReconHubResearch.tsx";
import ReconHubMetrics from "../domains/cards/components/ReconHub/ReconHubMetrics.tsx";
import ReconHubPersonas from "../domains/cards/components/ReconHub/ReconHubPersonas.tsx";
import ReconHubUserJourneyMap from "../domains/cards/components/ReconHub/ReconHubUserJourneyMap.tsx";
import ReconHubScreens from "../domains/cards/components/ReconHub/ReconHubScreens.tsx";
import ReconHubUsabilityStudy from "../domains/cards/components/ReconHub/ReconHubUsabilityStudy.tsx";
import ReconHubResult from "../domains/cards/components/ReconHub/ReconHubResult.tsx";

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
        {/*<ReconHubSlider />*/}
      </div>
    </PageLayout>
  );
};

export default ReconHubPage;
