import React, { FC, useCallback } from "react";

import { ReactComponent as Bank } from "./images/bank.svg";
import logo from "./images/logo.png";

import { LogoProp } from "./types";

import styles from "./Logo.module.scss";

const Logo: FC<LogoProp> = ({ isDark = false }) => {
  const textColor = useCallback(
    (color) => (isDark ? "#FFFFFF" : color),
    [isDark]
  );

  return (
    <div className={styles.logo}>
      <img className={styles.img} src={logo} alt="Логотип" />
      <Bank className={styles.bank} color={textColor("#131314")} />
    </div>
  );
};

export default Logo;
