import React, { useContext } from "react";
import styles from "./Card.module.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Card = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={
        darkMode
          ? `${styles.card} ${styles.card_dark} ${props.className}`
          : `${styles.card} ${styles.card_light} ${props.className}`
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
