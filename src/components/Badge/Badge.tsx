import React, { FC, useContext, useMemo } from "react";

import { ReactComponent as AppDefault } from "./images/app-default.svg";
import { ReactComponent as GPDefault } from "./images/gp-default.svg";
import { ReactComponent as AppOutlined } from "./images/app-outline.svg";
import { ReactComponent as GPOutlined } from "./images/gp-outline.svg";
import { ReactComponent as AppDefaultEn } from "./images/app-default-en.svg";
import { ReactComponent as GPDefaultEn } from "./images/gp-default-en.svg";
import { ReactComponent as AppOutlinedEn } from "./images/app-outline-en.svg";
import { ReactComponent as GPOutlinedEn } from "./images/gp-outline-en.svg";

import { BadgeProp } from "./types";
import { appStoreLink, gpLink } from "./consts";

import styles from "./Badge.module.scss";
import { TranslationContext } from "../../contexts/translationContext";

const Badge: FC<BadgeProp> = ({ type = "apple", isOutlined }) => {
  const { currentLang } = useContext(TranslationContext);

  const badge = useMemo(() => {
    switch (currentLang) {
      case "ru":
        if (type === "gp") {
          return isOutlined ? (
            <GPOutlined className={styles.badge} />
          ) : (
            <GPDefault className={styles.badge} />
          );
        }
        return isOutlined ? (
          <AppOutlined className={styles.badge} />
        ) : (
          <AppDefault className={styles.badge} />
        );
      case "en":
        if (type === "gp") {
          return isOutlined ? (
            <GPOutlinedEn className={styles.badge} />
          ) : (
            <GPDefaultEn className={styles.badge} />
          );
        }
        return isOutlined ? (
          <AppOutlinedEn className={styles.badge} />
        ) : (
          <AppDefaultEn className={styles.badge} />
        );
    }
  }, [currentLang, isOutlined, type]);

  return (
    <a
      className={styles.link}
      href={type === "gp" ? gpLink : appStoreLink}
      target="_blank"
      rel="noreferrer"
    >
      {badge}
    </a>
  );
};

export default Badge;
