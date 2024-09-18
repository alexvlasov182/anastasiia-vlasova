import React from "react";
import PageLayout from "../components/Layout/PageLayout";

import styles from './Pages.module.scss'

const ReconHubPage: React.FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1>Recon-Hub Page</h1>
      </div>
    </PageLayout>
  );
};

export default ReconHubPage;
