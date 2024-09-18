import React from "react";
import CardList from "../domains/cards/components/Cards/CardList.tsx";

import styles from './Pages.module.scss'

import PageLayout from "../components/Layout/PageLayout";
import WorkDescription from "../domains/cards/components/WorkDescription.tsx";

const Home: React.FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <WorkDescription />
        <CardList />
      </div>
    </PageLayout>
  );
};

export default Home;
