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
  AuthProvider 
} from "./contexts/AuthContext";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;    
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

        <Router> 
          <Switch>
            {routes}
          </Switch>             
        </Router>

      </AuthProvider>

    </AppContainer>
  )

};

export default App;
