import { FC, useContext } from "react";
import cns from "classnames";

import Logo from "../Logo";
import Suggestion from "../Suggestion";
import SocialLinks from "../SocialLinks";

import { HeaderProp } from "./types";

import styles from "./Header.module.scss";
import { TranslationContext } from "../../contexts/translationContext";

const Header: FC<HeaderProp> = ({ type = "parent" }) => {
  const { changeLang, currentLang } = useContext(TranslationContext);

  return (
    <header className={cns(styles.header, styles[`header_type_${type}`])}>
      <div className={styles.content}>
        <Logo />
        <Suggestion
          visible
          withCloseButton
          type={type}
          className={styles.suggestion}
        />
        <SocialLinks>
          <button
            className={styles.langButton}
            onClick={() => changeLang(currentLang === "ru" ? "en" : "ru")}
          >
            {currentLang === "ru" ? "En" : "Ru"}
          </button>
        </SocialLinks>
      </div>
    </header>
  );
};

export default Header;
