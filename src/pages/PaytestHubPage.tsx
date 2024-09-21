import React from "react";
import PageLayout from "../components/Layout/PageLayout";

import styles from './Pages.module.scss'
import PaytestHubHeroSection from "../domains/cards/components/PaytestHub/PaytestHubHeroSection.tsx";
import PaytestHubIntroduction from "../domains/cards/components/PaytestHub/PaytestHubIntroduction.tsx";
import PaytestHubResearch from "../domains/cards/components/PaytestHub/PaytestHubResearch.tsx";
import PaytestHubBusinessImpact from "../domains/cards/components/PaytestHub/PytestHubBusinessImpact.tsx";
import PaytestHubPersonas from "../domains/cards/components/PaytestHub/PaytestHubPersonas.tsx";
import PaytestHubUserJourneyMap from "../domains/cards/components/PaytestHub/PaytestHubUserJourneyMap.tsx";
import PaytestHubScreens from "../domains/cards/components/PaytestHub/PaytestHubScreens.tsx";
import PaytestHubUsabilityStudy from "../domains/cards/components/PaytestHub/PaytestHubUsabilityStudy.tsx";
import PaytestHubResult from "../domains/cards/components/PaytestHub/PaytestHubResult.tsx";
import PaytestHubResults from "../domains/cards/components/PaytestHub/PaytestHubResults.tsx";
import PaytestHubTakeAways from "../domains/cards/components/PaytestHub/PaytestHubTakeAways.tsx";
import ScrollToTop from "../domains/cards/components/ScrollToTop/ScrollToTop.tsx";
// import PaytestHubResearchInsights from "../domains/cards/components/PaytestHub/PaytestHubResearchInsights.tsx";


const PaytestHubPage: React.FC = () => {
  return (
    <PageLayout>
      <PaytestHubHeroSection />
      <div className={styles.container}>
        <PaytestHubIntroduction />
        <PaytestHubResearch />
        {/*<PaytestHubResearchInsights />*/}
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