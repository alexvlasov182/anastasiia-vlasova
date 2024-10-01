import React from "react";
import PageLayout from "../components/Layout/PageLayout";

import styles from './Pages.module.scss'
import FocalPointIntroduction from "../domains/components/FocalPoint/FocalPointIntroduction.tsx";
import FocalPointHero from "../domains/components/FocalPoint/FocalPointHero.tsx";
import FocalPointResearch from "../domains/components/FocalPoint/FocalPointResearch.tsx";
import FocalPointPersonas from "../domains/components/FocalPoint/FocalPointPersonas.tsx";
import FocalPointPrioritization from "../domains/components/FocalPoint/FocalPointPrioritization.tsx";
import FocalPointUserFlow from "../domains/components/FocalPoint/FocalPointUserFlow.tsx";
import FocalPointWireframes from "../domains/components/FocalPoint/FocalPointWireframes.tsx";
import FocalPointUsabilityStudy from "../domains/components/FocalPoint/FocalPointUsabilityStudy.tsx";
import ScrollToTop from "../domains/components/ScrollToTop/ScrollToTop.tsx";
import FocalPointUIScreens from "../domains/components/FocalPoint/FocalPointUIScreens.tsx";
import FocalPointTakeAways from "../domains/components/FocalPoint/FocalPointTakeAways.tsx";

const FocalPointPage: React.FC = () => {
  return (
    <PageLayout>
      <FocalPointHero />
      <div className={styles.container}>
        <FocalPointIntroduction />
        <FocalPointResearch />
        <FocalPointPersonas />
        <FocalPointPrioritization />
        <FocalPointUserFlow />
        <FocalPointWireframes />
        <FocalPointUsabilityStudy />
        <FocalPointUIScreens />
        <FocalPointTakeAways />
      </div>
      <ScrollToTop />
    </PageLayout>
  );
};

export default FocalPointPage;