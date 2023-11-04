import React from "react";
import styles from "./Button.module.css";
const Button = ({text, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        <span>{text}</span>
        <img className={styles.arrow} src={require("../../../Assets/images/arrow.png")} alt="" />
      </button>
    </div>
  );
};

export default Button;
