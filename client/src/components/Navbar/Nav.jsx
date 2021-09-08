import React, { useState, useContext } from "react";
import styles from "./Nav.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import NavOption from "./NavOption";
import ThemeButton from '../UI/themeButton/ThemeButton'


export default function Nav() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode; 


  const history = useHistory();
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout() {
    console.log("check");
    setError("");

    try {
      console.log("logout");
      await logout();
      history.push("/login");
    } catch {
      console.log("not logging out");
      setError("Failed to log out");
    }
  }

  return (
    <div className={darkMode ? styles.nav_dark : styles.nav_light}> 
      <div className={styles.nav_left}>
        {currentUser ? 
          <Link to="/dashboard" className={darkMode ? styles.header_dark : styles.header_light}>
            <div>Menu</div><div>Manager</div>
          </Link>
          :
          <Link to="/" className={darkMode ? styles.header_dark : styles.header_light}>
            <div>Menu</div><div>Manager</div>
          </Link>
        }    
        
      </div>
      <div className={styles.nav_middle}>
      {currentUser && (
          <Link to="/menus" className={styles.link}>
            <NavOption title="Menus" darkMOde={darkMode} />
          </Link>
        )}        
        {currentUser && (
          <Link to="/recipes" className={styles.link}>
            <NavOption title="Recipes" />
          </Link>
        )}        
        {currentUser && (
          <Link to="/profile" className={styles.link}>
            <NavOption title="Profile" />
          </Link>
        )}
        
          <Link to="/contact" className={styles.link}>
            <NavOption title="Contact" />
          </Link>
        
      </div>
      <div className={styles.nav_right}>
        {currentUser ? (
          <div onClick={handleLogout}>
            <NavOption title="Log Out" className={styles.logout} />
          </div>
        ) : (
          <Link to="/profile">
            <NavOption title="Log In" />
          </Link>
        )}
        <ThemeButton />
      </div>
    </div>
  );
}


