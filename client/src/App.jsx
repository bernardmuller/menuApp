import React from "react"
import styled from 'styled-components';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route ,
  Redirect,
} from "react-router-dom";

import {
  Routes
} from 'navigation';

import { 
  PrivateRoute 
} from "./common/components";

import { 
  colors
} from "common";

import { 
  AuthProvider,
  ActiveViewProvider,
} from "contexts";

const AppContainer = styled.div`
  /* min-height: 100vh; */
  min-height: 100vh;
  /* height: 100vh; */
  width: 100%;    
  background-color: ${colors.tertiary};
  z-index: -10;
`

function App() {

  let routes = [];
  let route;

  for ( const key in Routes) {

    route = Routes[key];

    if (route.default) {

      routes.push(
        <Route exact path={'/'} key={'default-path'}>
          <Redirect to={route.path} />
        </Route>
      )

    }

    if(route.private) {

      routes.push(
        <PrivateRoute 
          key={key}
          exact={true}
          path={route.path} 
          component={route.component}  
        />
      )

    }

    routes.push(
      <Route 
        key={key}
        exact={true}
        path={route.path} 
        component={route.component}  
      />
    )

  }


  return (
    <AppContainer>

      <AuthProvider>

        <ActiveViewProvider>

          <Router> 
            <Switch>
              {routes}
            </Switch>             
          </Router>

        </ActiveViewProvider>

      </AuthProvider>

    </AppContainer>
  )

};

export default App;
