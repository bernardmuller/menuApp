import React from 'react'
import styles from './NavOption.module.css'


export default function NavOption({ title, darkMode }) {

    return (
        <div className={darkMode ? styles.navOption_dark : styles.navOption_light}>            
            <h3 className={styles.navOption_title}>{title}</h3>
        </div>
    )
}
