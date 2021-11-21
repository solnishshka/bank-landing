import React, { FC } from "react";
import cns from "classnames";

import { ReactComponent as Telegram } from "./images/tg.svg";
import { ReactComponent as Email } from "./images/email.svg";
import { ReactComponent as Twitter } from "./images/twitter.svg";
import { ReactComponent as Facebook } from "./images/facebook.svg";

import styles from "./SocialLinks.module.scss";
import { SocialLinksProp } from "./types";
import { email, facebookUrl, telegramUrl, twitterUrl } from "./consts";

const SocialLinks: FC<SocialLinksProp> = ({ type = "header", children }) => {
  return (
    <div className={styles.socialLinks}>
      <a
        href={telegramUrl}
        className={cns(styles.button, styles[`button_type_${type}`])}
        target="_blank"
        rel="noreferrer"
      >
        <Telegram className={cns(styles.icon, styles.icon_type_tg)} />
      </a>
      <a
        href={facebookUrl}
        className={cns(styles.button, styles[`button_type_${type}`])}
        target="_blank"
        rel="noreferrer"
      >
        <Facebook className={cns(styles.icon, styles.icon_type_facebook)} />
      </a>
      <a
        href={twitterUrl}
        className={cns(styles.button, styles[`button_type_${type}`])}
        target="_blank"
        rel="noreferrer"
      >
        <Twitter className={cns(styles.icon, styles.icon_type_twitter)} />
      </a>
      <a
        href={email}
        className={cns(styles.button, styles[`button_type_${type}`])}
        target="_blank"
        rel="noreferrer"
      >
        <Email className={cns(styles.icon, styles.icon_type_email)} />
      </a>
      {type === "header" && children}
    </div>
  );
};

export default SocialLinks;
