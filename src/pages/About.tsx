import React from "react";

import PageLayout from "../components/Layout/PageLayout";
import AboutValues from "../domains/cards/components/AboutValues.tsx";
import AboutSection from "../domains/cards/components/AboutSection.tsx";

const About: React.FC = () => {
  return (
    <PageLayout>
      <AboutSection />
      <AboutValues />
    </PageLayout>
  );
};

export default About;
