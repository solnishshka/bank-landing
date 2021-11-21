import { FC, useContext, useMemo } from "react";
import cns from "classnames";

import { ContentContainerProp } from "./types";

import MainTitle from "../MainTitle";

import cloud from "./images/cloud.png";

import styles from "./ContentContainer.module.scss";
import Card from "../Card";

import { ReactComponent as Line } from "./images/line.svg";
import { ReactComponent as LineKid } from "./images/line-kid.svg";
import { ReactComponent as Ellipse } from "./images/ellipse.svg";

import kidSmallEn from "./images/kid-small-en.png";
import kidSmall from "./images/kid-small.png";
import parentSmallEn from "./images/parent-small-en.png";
import parentSmall from "./images/parent-small.png";

import Badges from "../Badges";

import Suggestion from "../Suggestion";
import { TranslationContext } from "../../contexts/translationContext";

const ContentContainer: FC<ContentContainerProp> = ({
  type = "parent",
  cardContent,
}) => {
  const { currentLang } = useContext(TranslationContext);

  const img = useMemo(() => {
    switch (currentLang) {
      case "en":
        return type === "parent" ? parentSmallEn : kidSmallEn;
      case "ru":
        return type === "parent" ? parentSmall : kidSmall;
    }
  }, [currentLang, type]);

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <MainTitle className={styles.title} type={type} />
        <Badges className={styles.badges} />
        <div
          className={cns(
            styles.mainImage,
            styles[`mainImage_type_${type}${currentLang}`]
          )}
        >
          <img className={styles.img} src={img} alt="Главное изображение" />
        </div>
        <ul className={cns(styles.list, styles[`list_type_${type}`])}>
          {cardContent.map((card) => (
            <li key={card.id} className={styles.listItem}>
              <Card {...card} />
            </li>
          ))}
        </ul>
        <div
          className={cns(
            styles.suggestionContainer,
            styles[`suggestionContainer_type_${type}`]
          )}
        >
          <Suggestion className={styles.suggestion} type={type} />
        </div>
        <Ellipse
          className={cns(
            styles.ellipse,
            styles.leftEllipse,
            styles[`leftEllipse_type_${type}`]
          )}
        />
        <Ellipse
          className={cns(
            styles.ellipse,
            styles.rightEllipse,
            styles[`rightEllipse_type_${type}`]
          )}
        />
        {type === "kid" ? (
          <LineKid className={cns(styles.line, styles[`line_type_${type}`])} />
        ) : (
          <Line className={cns(styles.line, styles[`line_type_${type}`])} />
        )}
        <img className={styles.cloud} src={cloud} alt="Облачко" />
      </div>
      <div
        className={cns(
          styles.rightBgContainer,
          styles[`rightBgContainer_type_${type}`]
        )}
      />
    </main>
  );
};

export default ContentContainer;
