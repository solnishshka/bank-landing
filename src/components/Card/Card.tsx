import React, { FC } from "react";

import { CardProp } from "./types";

import styles from "./Card.module.scss";

const Card: FC<CardProp> = ({ title, text }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};

export default Card;
