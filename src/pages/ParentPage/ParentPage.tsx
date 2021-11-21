import React, { FC, useContext } from "react";

import ContentContainer from "../../components/ContentContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { TranslationContext } from "../../contexts/translationContext";

import styles from "./ParentPage.module.scss";

const ParentPage: FC = () => {
  const { translation } = useContext(TranslationContext);

  return (
    <div className={styles.page}>
      <Header />
      <ContentContainer cardContent={translation.parent.cards} />
      <Footer />
    </div>
  );
};

export default ParentPage;
