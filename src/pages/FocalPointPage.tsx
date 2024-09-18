import React from "react";
import PageLayout from "../components/Layout/PageLayout";

import styles from './Pages.module.scss'

const FocalPointPage: React.FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1>Focal Point Page</h1>
      </div>
    </PageLayout>
  );
};

export default FocalPointPage;