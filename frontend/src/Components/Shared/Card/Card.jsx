import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({title,icon, children}) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <img src={require(`../../../Assets/images/${icon}.png`)} alt="logo" />
        <h2 className={styles.heading}>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Card;
