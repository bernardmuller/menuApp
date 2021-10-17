import React, { useContext } from "react"
import Signup from "./pages/signin/Signup"

import { AuthProvider } from "./contexts/AuthContext"
import { ThemeContext } from "./contexts/ThemeContext"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from 'styled-components';
import colors from "utils/colors"
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import UpdateProfile from "./pages/profile/update-profile/UpdateProfile";
import Nav from "./components/Navbar/Nav";
import Container from "./components/UI/container/Container";
import Dashboard from "./pages/dashboard/Dashboard";
import Menus from "./pages/menus/Menus";
import Splash from "./pages/splash/Splash";

import styles from './App.module.css';
import Footer from "./components/Footer/Footer";

const AppContainer = styled.div`
  background-color: ${props => props.darkMode ? colors.black : colors.white} ;   
  min-height: 100vh;
  width: 100%;    
  position: absolute;  
`

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <AppContainer darkMode={darkMode}>
      <AuthProvider>
        <Router> 
        <Nav />
          <Container>
            <div>                        
                  <Switch>
                    <Route exact path="/" component={Splash} />
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/menus" component={Menus} />
                    <PrivateRoute path="/settings" component={Profile} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                  </Switch>             
            </div>
          </Container>
          {/* <Footer /> */}
        </Router>
      </AuthProvider>
    </AppContainer>
  )
}

export default App
