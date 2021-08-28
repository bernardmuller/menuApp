import React, { useState } from 'react'
import styles from './Nav.module.css'
import burgerIcon from './burgerIcon.png' 
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"

import NavOption from './NavOption';

//icons
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Nav() {
    const history = useHistory()
    const { logout, currentUser } = useAuth()
    const [error, setError] = useState("")      

    async function handleLogout() {
        console.log('check')
        setError("")
    
        try {
            console.log('logout')
          await logout()
          history.push("/login")
        } catch {
            console.log('not logging out')
          setError("Failed to log out")
        }
      }

    return (
        <div className={styles.nav}>
           <div className={styles.nav_left}>
                <Link to="/" className={styles.link}><img src={burgerIcon} alt=""/></Link>                

                <div className={styles.nav_search}>
                    <SearchRoundedIcon />
                    <input placeholder="Search" type="text"/>
                </div>  
            </div>          
           <div className={styles.nav_right}>                               
                <div className={styles.nav_options}>
                    {currentUser && <Link to="/recipes"><NavOption title='Recipes' Icon={DescriptionRoundedIcon} /></Link>}
                    {currentUser && <Link to="/menus"><NavOption title='Menus' Icon={MenuBookRoundedIcon} /></Link>}
                    {currentUser && <Link to="/profile"><NavOption title='Profile' Icon={AccountBoxRoundedIcon} /></Link>}
                    {currentUser ? <div onClick={handleLogout}><NavOption title='Log Out' Icon={ExitToAppRoundedIcon}  /></div> : <Link to="/profile"><NavOption title='Log In' Icon={AccountCircleIcon} /></Link>}
                   
                </div> 
            </div>           
            
        </div>
    )
}


