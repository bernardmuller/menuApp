import { Avatar } from '@material-ui/core'
import React from 'react'
import styles from './NavOption.module.css'


function NavOption({ avatar, title, Icon }) {
    return (
        <div className={styles.navOption}>
            {Icon && <Icon className={styles.navOption_icon} />}
            {avatar && <Avatar className={styles.navOption_icon} src={avatar} />}
            <h3 className={styles.navOption_title}>{title}</h3>
        </div>
    )
}

export default NavOption;