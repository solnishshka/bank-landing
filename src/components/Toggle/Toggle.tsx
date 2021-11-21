import React, { FC } from "react";
import cns from "classnames";
import { Link } from "react-router-dom";

import { appRoutes } from "../Routes/consts";
import { ToggleProp } from "./types";

import styles from "./Toggle.module.scss";

const Toggle: FC<ToggleProp> = ({ type = "parent" }) => {
  return (
    <div className={cns(styles.wrapper, styles[`wrapper_type_${type}`])}>
      <Link
        className={cns(styles.toggle, styles[`toggle_type_${type}`])}
        to={type === "parent" ? appRoutes.kidPage : appRoutes.parentPage}
      >
        <div className={cns(styles.circle, styles[`circle_type_${type}`])} />
      </Link>
    </div>
  );
};

export default Toggle;
