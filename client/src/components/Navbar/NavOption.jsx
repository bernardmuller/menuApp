import React, { useContext } from 'react'
import styles from './NavOption.module.css'

import { ThemeContext } from "../../contexts/ThemeContext";

export default function NavOption({ title }) {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className={darkMode ? styles.navOption_dark : styles.navOption_light}>            
            <h3 className={styles.navOption_title}>{title}</h3>
        </div>
    )
}
