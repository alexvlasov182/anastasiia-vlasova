import React from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import styles from "../../pages/Pages.module.scss";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
  { key: "work", label: <Link to="/">Work</Link> },
  { key: "about", label: <Link to="/about">About</Link> },
  {
    key: "cv",
    label: (
      <Link
        to="https://drive.google.com/file/d/1SaF-HuhehCW2p1H1pjg7kPPkviMuVplY/view?usp=sharing"
        target="_blank"
      >
        Resume
      </Link>
    ),
  },
];

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.logo}>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/"
              >
                Anastasiia Vlasova
              </Link>
            </div>


            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items}
              className={styles.menu}
            />
          </div>

        </Header>
        <Content className={styles.content}>{children}</Content>
        <Footer className={styles.footer}>
          Designed by Anastasiia Vlasova | Created by Oleksandr Vlasov ©
          {new Date().getFullYear()}
        </Footer>
    </Layout>
  );
};

export default PageLayout;
