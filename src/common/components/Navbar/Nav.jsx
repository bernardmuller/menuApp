import React, { 
  useState,
  useEffect,
  useContext
} from "react";

import styled from "styled-components";

import { 
  colors 
} from 'common';

import {
  Routes
} from 'navigation';

import {    
  IoLogOut,
} from "react-icons/io5";

import { 
  useHistory 
} from "react-router-dom";

import { 
  NavOption 
} from "./components/NavOption";

import { 
  ActiveViewContext
} from "contexts/ActiveViewContext";

import { DataStore } from "common/dataStore";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding-top: 2rem;
  width:100px;
  min-width: 60px;
  max-width: 80px;
  min-height: 100%;
  z-index: 999; 
  background-color: ${colors.secondary};
`

const NavOptions = styled.div`
  display: flex;
  flex-direction: column;
  height: 25%;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`


export const Nav = () => {

  const [menuActive, setMenuActive] = useState(false)
  const [mealsActive, setMealsActive] = useState(false)
  const [profileActive, setProfileActive] = useState(false)
  const [settingsActive, setSettingsActive] = useState(false)

  const activeContext = useContext(ActiveViewContext);
  const active = activeContext.state.active;  

  const history = useHistory();

  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");
    try {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      await fetch('https://munchies-api-5fqmkwna4q-nw.a.run.app/logout', {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        withCredentials: true,
        credentials: 'include',
        headers: headers,
      });
      
      await DataStore.clear("LOGGED_IN_USER");

    } catch (err) {
      setError("Failed to log out", err);
    }

    history.push(Routes.login.path);
  };


  useEffect(() => {        
    if(active === "MENUS") {
        setMenuActive(true)
    } else {
        setMenuActive(false)
    }
    if(active === "MEALS") {
        setMealsActive(true)
    } else {
        setMealsActive(false)
    }
    if(active === "PROFILE") {
        setProfileActive(true)
    } else {
        setProfileActive(false)
    }
    if(active === "SETTINGS") {
        setSettingsActive(true)
    } else {
        setSettingsActive(false)
    }

  }, [active])


  return (

    <NavContainer > 

      <NavOptions>

        <NavOption 
            title={Routes.menus.title}
            Icon={Routes.menus.icon} 
            path={Routes.menus.path} 
            active={menuActive}
        />

        <NavOption
            title={Routes.meals.title} 
            Icon={Routes.meals.icon} 
            path={Routes.meals.path}
            active={mealsActive}
        />

        <NavOption 
          title={Routes.profile.title}
            Icon={Routes.profile.icon} 
            path={Routes.profile.path}
            active={profileActive}
        />

        <NavOption 
            title={Routes.settings.title}
            Icon={Routes.settings.icon} 
            path={Routes.settings.path}
            active={settingsActive}
        />

      </NavOptions>

      <Settings>
        <div 
          onClick={handleLogout}
          style={{width: '100%', }}
        >
          <NavOption 
            title="Logout" 
            Icon={IoLogOut}
            onClick={handleLogout}
            />
        </div>
      </Settings>

    </NavContainer>
  );
}


