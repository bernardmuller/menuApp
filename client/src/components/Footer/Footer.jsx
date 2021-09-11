import React, { useState, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={
        darkMode
          ? `${styles.footer} ${styles.footer_dark}`
          : `${styles.footer} ${styles.footer_light}`
      }
    >
        <p>Footer</p>
    </div>
  );
}
