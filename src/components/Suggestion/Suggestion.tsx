import { FC, useContext, useState } from "react";
import cns from "classnames";

import { ReactComponent as CloseButton } from "./images/closeButton.svg";

import { SuggestionProps } from "./types";
import { TranslationContext } from "../../contexts/translationContext";
import { PageType } from "../../types";
import { email } from "../SocialLinks/consts";

import styles from "./Suggestion.module.scss";

const Suggestion: FC<SuggestionProps> = ({
  visible = true,
  type,
  className,
  withCloseButton,
}) => {
  const { translation, currentLang } = useContext(TranslationContext);

  const [isVisible, setIsVisible] = useState(visible);

  if (!isVisible) return null;

  return (
    <div className={cns(styles.container, className)}>
      <p
        className={cns(
          styles.text,
          currentLang === "en" && styles.text_lang_en
        )}
      >
        {translation[type as PageType].suggestionText.start}&nbsp;
        <span className={cns(styles.span, styles[`span_type_${type}`])}>
          {translation[type as PageType].suggestionText.span}
        </span>
        &nbsp;{translation[type as PageType].suggestionText.end}
      </p>
      <a
        className={cns(styles.button, styles[`button_type_${type}`])}
        href={email}
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles.buttonSpan}>
          {translation.suggestionButtonText}
        </span>
      </a>
      {withCloseButton && (
        <button className={styles.closeButton}>
          <CloseButton
            className={styles.closeButtonIcon}
            onClick={() => setIsVisible(!isVisible)}
          />
        </button>
      )}
    </div>
  );
};

export default Suggestion;
