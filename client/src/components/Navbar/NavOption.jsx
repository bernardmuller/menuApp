import React from 'react'
import styles from './NavOption.module.css'


function NavOption({ title }) {
    return (
        <div className={styles.navOption}>            
            <h3 className={styles.navOption_title}>{title}</h3>
        </div>
    )
}

export default NavOption;