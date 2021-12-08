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
  useAuth 
} from "contexts/AuthContext";

import { 
  useHistory 
} from "react-router-dom";

import { 
  NavOption 
} from "./components/NavOption";

import { 
  ActiveViewContext
} from "contexts/ActiveViewContext";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding-top: 2rem;
  width: 5%;
  min-width: 60px;
  max-width: 90px;
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

  const [dashActive, setDashActive] = useState(false)
  const [mealsActive, setMealsActive] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const [plannerActive, setPlannerActive] = useState(false)

  const activeContext = useContext(ActiveViewContext);
  const active = activeContext.state.active;  

  const history = useHistory();

  const { 
    logout, 
    currentUser 
  } = useAuth();

  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");
    try {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      await fetch('http://localhost:4001/logout', {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        withCredentials: true,
        credentials: 'include',
        headers: headers,
      });
      // history.push(Routes.login.path);
    } catch {
      setError("Failed to log out");
    }
    history.push(Routes.login.path);

  }


  useEffect(() => {        
    if(active === "DASHBOARD") {
        setDashActive(true)
    } else {
        setDashActive(false)
    }
    if(active === "MEALS") {
        setMealsActive(true)
    } else {
        setMealsActive(false)
    }
    if(active === "SEARCH") {
        setSearchActive(true)
    } else {
        setSearchActive(false)
    }
    if(active === "PLANNER") {
        setPlannerActive(true)
    } else {
        setPlannerActive(false)
    }

  }, [active])


  return (

    <NavContainer > 

      <NavOptions>

        <NavOption 
            title={Routes.dashboard.title}
            Icon={Routes.dashboard.icon} 
            path={Routes.dashboard.path} 
            active={dashActive}
        />

        <NavOption
            title={Routes.meals.title} 
            Icon={Routes.meals.icon} 
            path={Routes.meals.path}
            active={mealsActive}
        />

        <NavOption 
          title={Routes.search.title}
            Icon={Routes.search.icon} 
            path={Routes.search.path}
            active={searchActive}
        />

        <NavOption 
            title={Routes.planner.title}
            Icon={Routes.planner.icon} 
            path={Routes.planner.path}
            active={plannerActive}
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


