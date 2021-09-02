import React, { useState, useContext } from "react";
import styles from "./Nav.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import NavOption from "./NavOption";
import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.production.min";

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
    <div className={styles.nav}> 
      <div className={styles.nav_left}>
        <Link to="/" className={styles.header}>
          <div>Menu</div><div>Manager</div>
        </Link>
      </div>
      <div className={styles.nav_middle}>
      {currentUser && (
          <Link to="/menus" className={styles.link}>
            <NavOption title="Menus" />
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
      </div>
    </div>
  );
}


