import React from "react";
import PageLayout from "../components/Layout/PageLayout";

import styles from './Pages.module.scss'

const DoablyPage: React.FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1>Doably Page</h1>
      </div>
    </PageLayout>
  );
};

export default DoablyPage;