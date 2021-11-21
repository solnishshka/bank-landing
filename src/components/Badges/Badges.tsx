import React, { FC } from "react";
import cns from "classnames";

import Badge from "../Badge";

import { BadgesProps } from "./types";

import styles from "./Badges.module.scss";

const Badges: FC<BadgesProps> = ({ isColumn, isOutlined, className }) => {
  return (
    <div
      className={cns(
        styles.wrapper,
        isColumn && styles.wrapper_type_column,
        className
      )}
    >
      <Badge type="apple" isOutlined={isOutlined} />
      <Badge type="gp" isOutlined={isOutlined} />
    </div>
  );
};

export default Badges;
