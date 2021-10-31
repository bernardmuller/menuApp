import React, { useState, useContext } from "react";
import styled from "styled-components";
import colors from "utils/colors";

import { useAuth } from "contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "contexts/ThemeContext";
import NavOption from "./components/NavOption";
import ThemeButton from '../UI/themeButton/ThemeButton';
import NavHeader from "./components/NavHeader";

import { 
        IoFastFood, 
        IoCalendar,
        IoSearch, 
        IoPersonCircle, 
        IoChatbubble,  
        IoLogOut,
        IoSettings, 
        IoLogIn } from "react-icons/io5";


const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding-top: 2rem;
  padding-bottom: 2rem;
  /* top: 0;     */
  width: 60px;
  height: 100%;
  z-index: 999; 
  background-color: ${colors.dark.grey};
  /* box-shadow: 0px 3px 10px ${colors.black}; */
`

const NavOptions = styled.div`
  display: flex;
  flex-direction: column;
  height: 25%;
  /* flex: 0.3; */
  justify-content: space-evenly;
  align-items: center;
`

const Settings = styled.div`
  /* flex: 0.1; */
  display: flex;
  flex-direction: column;
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
      {/* <NavLeft>
          <NavHeader />
      </NavLeft> */}
      <NavOptions>
      {currentUser && (
          <div onClick= {() => {history.push('/meals')}}>
            <NavOption 
              title="Meals" 
              Icon={IoFastFood} 
              />
          </div>
        )}   
        {currentUser && (
          <div onClick= {() => {history.push('/search')}}>
            <NavOption 
              title="Search" 
              Icon={IoSearch}
            />
          </div>
        )}
        {currentUser && (
          <div onClick= {() => {history.push('/planner')}}>
            <NavOption 
              title="Planner" 
              Icon={IoCalendar}
            />
          </div>
        )}       
        {currentUser && (
          <div onClick= {() => {history.push('/contact')}}>
            <NavOption 
              title="Contact"
              Icon={IoChatbubble}
            />
          </div>
        )}
        
      </NavOptions>
      <Settings>
      {currentUser && (
          <div onClick= {() => {history.push('/settings')}}>
            <NavOption 
              title="Settings" 
              Icon={IoSettings}
            />
          </div>
        )}
        {currentUser ? (
          <div onClick={handleLogout}>
            <NavOption 
              title="Logout" 
              Icon={IoLogOut}
              />
          </div>
        ) : (
          <Link to="/login">
            <NavOption 
              title="Login" 
              Icon={IoLogIn}
            />
          </Link>
        )}
        {/* <ThemeButton /> */}
      </Settings>
    </NavContainer>
  );
}


