import React, { FC, useContext } from "react";

import ContentContainer from "../../components/ContentContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { TranslationContext } from "../../contexts/translationContext";

import styles from "./KidPage.module.scss";

const KidPage: FC = () => {
  const { translation } = useContext(TranslationContext);

  return (
    <div className={styles.page}>
      <Header type="kid" />
      <ContentContainer type="kid" cardContent={translation.kid.cards} />
      <Footer />
    </div>
  );
};

export default KidPage;
