import React, { FC, useContext } from "react";
import cns from "classnames";

import { MainTitleProp } from "./types";

import styles from "./MainTitle.module.scss";
import Toggle from "../Toggle";
import { TranslationContext } from "../../contexts/translationContext";

const MainTitle: FC<MainTitleProp> = ({ type = "parent", className }) => {
  const { translation, currentLang } = useContext(TranslationContext);

  return (
    <div
      className={cns(
        styles.title,
        className,
        currentLang === "en" && styles.title_lang_en
      )}
    >
      {translation.mainTitle.main}
      <div className={cns(styles.wrapper, styles[`wrapper_type_${type}`])}>
        <div
          className={cns(
            styles.titleWithToggle,
            styles[`titleWithToggle_type_${type}`]
          )}
        >
          <span className={cns(styles.title, styles[`title_type_${type}`])}>
            {translation.mainTitle.kids}
          </span>
          <Toggle type={type} />
          <span className={cns(styles.title, styles[`title_type_${type}`])}>
            {translation.mainTitle.parents}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
