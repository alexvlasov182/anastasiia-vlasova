import React from "react";
import PageLayout from "../components/Layout/PageLayout";

import styles from './Pages.module.scss'
import ScrollToTop from "../domains/components/ScrollToTop/ScrollToTop.tsx";
import DoablyHero from "../domains/components/Doably/DoablyHero.tsx";
import DoablyIntroduction from "../domains/components/Doably/DoablyIntroduction.tsx";
import DoablyResearch from "../domains/components/Doably/DoablyResearch.tsx";
import DoablyPersonas from "../domains/components/Doably/DoablyPersonas.tsx";
import DoablyUserJourneyMap from "../domains/components/Doably/DoablyUserJourneyMap.tsx";
import DoablyWireframes from "../domains/components/Doably/DoablyWireframes.tsx";
import DoablyUIScreens from "../domains/components/Doably/DoablyUIScreens.tsx";
import DoablyTakeAways from "../domains/components/Doably/DoablyTakeAways.tsx";

const DoablyPage: React.FC = () => {
  return (
    <PageLayout>
      <DoablyHero />
      <div className={styles.container}>
        <DoablyIntroduction />
        <DoablyResearch />
        <DoablyPersonas />
        <DoablyUserJourneyMap />
        <DoablyWireframes />
        <DoablyUIScreens />
        <DoablyTakeAways />
      </div>
      <ScrollToTop />
    </PageLayout>
  );
};

export default DoablyPage;