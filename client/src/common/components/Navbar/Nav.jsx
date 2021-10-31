import React, { 
  useState
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

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 60px;
  min-height: 100%;
  z-index: 999; 
  background-color: ${colors.dark.grey};
`

const NavOptions = styled.div`
  display: flex;
  flex-direction: column;
  height: 25%;
  justify-content: space-evenly;
  align-items: center;
`

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`


export const Nav = () => {

  const history = useHistory();

  const { 
    logout, 
    currentUser 
  } = useAuth();

  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push(Routes.login.path);
    } catch {
      setError("Failed to log out");
    }
  }


  let routes = [];
  let route;

  for ( const key in Routes) {

    route = Routes[key];

    if (route.private) {
      routes.push(
        <NavOption 
          key={key}
          title={route.title}
          Icon={route.icon}
          path={route.path}
        />
      )
    }
    
  };

  return (

    <NavContainer > 

      <NavOptions>
        {routes}
      </NavOptions>

      <Settings>
        <div onClick={handleLogout}>
          <NavOption 
            title="Logout" 
            Icon={IoLogOut}
          />
        </div>
      </Settings>

    </NavContainer>
  );
}


