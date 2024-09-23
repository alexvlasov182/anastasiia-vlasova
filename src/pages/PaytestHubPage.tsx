import React from "react";
import PageLayout from "../components/Layout/PageLayout";

import styles from './Pages.module.scss'
import PaytestHubHeroSection from "../domains/components/PaytestHub/PaytestHubHeroSection.tsx";
import PaytestHubIntroduction from "../domains/components/PaytestHub/PaytestHubIntroduction.tsx";
import PaytestHubResearch from "../domains/components/PaytestHub/PaytestHubResearch.tsx";
import PaytestHubBusinessImpact from "../domains/components/PaytestHub/PytestHubBusinessImpact.tsx";
import PaytestHubPersonas from "../domains/components/PaytestHub/PaytestHubPersonas.tsx";
import PaytestHubUserJourneyMap from "../domains/components/PaytestHub/PaytestHubUserJourneyMap.tsx";
import PaytestHubScreens from "../domains/components/PaytestHub/PaytestHubScreens.tsx";
import PaytestHubUsabilityStudy from "../domains/components/PaytestHub/PaytestHubUsabilityStudy.tsx";
import PaytestHubResult from "../domains/components/PaytestHub/PaytestHubResult.tsx";
import PaytestHubResults from "../domains/components/PaytestHub/PaytestHubResults.tsx";
import PaytestHubTakeAways from "../domains/components/PaytestHub/PaytestHubTakeAways.tsx";
import ScrollToTop from "../domains/components/ScrollToTop/ScrollToTop.tsx";
import PaytestHubResearchInsights from "../domains/components/PaytestHub/PaytestHubResearchInsights.tsx";


const PaytestHubPage: React.FC = () => {
  return (
    <PageLayout>
      <PaytestHubHeroSection />
      <div className={styles.container}>
        <PaytestHubIntroduction />
        <PaytestHubResearch />
        <PaytestHubResearchInsights />
        <PaytestHubBusinessImpact />
        <PaytestHubPersonas />
        <PaytestHubUserJourneyMap />
        <PaytestHubScreens />
        <PaytestHubUsabilityStudy />
        <PaytestHubResult />
        <PaytestHubResults />
        <PaytestHubTakeAways />
      </div>
      <ScrollToTop />
    </PageLayout>
  );
};

export default PaytestHubPage;