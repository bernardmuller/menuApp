import React, { useState, useContext } from "react";
import styled from "styled-components";
import colors from "utils/colors";

import { useAuth } from "contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "contexts/ThemeContext";
import NavOption from "./components/NavOption";
import ThemeButton from '../UI/themeButton/ThemeButton';
import NavHeader from "./components/NavHeader";

const NavContainer = styled.div`
  display: flex;    
  justify-content: space-evenly;
  position: fixed;
  top: 0;    
  width: 100%;
  height: 80px;
  z-index: 999; 
  background-color: ${props => props.darkMode ? colors.jetBlack : colors.dark.secondary };
  box-shadow: 0px 3px 10px ${props => props.darkMode? colors.transparent : colors.black};
`

const NavLeft = styled.div`
  flex: 0.1;
  display: flex;
  justify-content: center;
  align-items: center;  
`

const NavMiddle = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: space-evenly;
  align-items: center;
`

const NavRight = styled.div`
  flex: 0.1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


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
    <NavContainer darkMode={darkMode}> 
      <NavLeft>
          <NavHeader />
      </NavLeft>
      <NavMiddle>
      {currentUser && (
          <div onClick= {() => {history.push('/menus')}}>
            <NavOption 
              title="Menus" 
              darkMOde={darkMode} 
            />
          </div>
        )}        
        {currentUser && (
          <div onClick= {() => {history.push('/my-meals')}}>
            <NavOption title="My Meals" />
          </div>
        )}        
        {currentUser && (
          <div onClick= {() => {history.push('/recipes')}}>
            <NavOption title="Recipes" />
          </div>
        )}        
        {currentUser && (
          <div onClick= {() => {history.push('/profile')}}>
            <NavOption title="Profile" />
          </div>
        )}
          <div onClick= {() => {history.push('/contact')}}>
            <NavOption title="Contact" />
          </div>
      </NavMiddle>
      <NavRight>
        {currentUser ? (
          <div onClick={handleLogout}>
            <NavOption title="Log Out" />
          </div>
        ) : (
          <Link to="/profile">
            <NavOption title="Login" />
          </Link>
        )}
        <ThemeButton />
      </NavRight>
    </NavContainer>
  );
}


