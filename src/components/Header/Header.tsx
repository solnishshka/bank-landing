import { FC } from "react";
import cns from "classnames";

import Logo from "../Logo";
import Suggestion from "../Suggestion";
import SocialLinks from "../SocialLinks";

import { HeaderProp } from "./types";

import styles from "./Header.module.scss";

const Header: FC<HeaderProp> = ({ type = "parent" }) => {
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
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
