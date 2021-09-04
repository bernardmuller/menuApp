import React, { useContext } from "react"
import Signup from "./Signup"

import { AuthProvider } from "../contexts/AuthContext"
import { ThemeContext } from "../contexts/ThemeContext"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./Profile"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Nav from "./Navbar/Nav"
import Container from "./UI/container/Container"
import Dashboard from "./Dashboard"

import styles from './App.module.css'

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? styles.app_dark : styles.app_light}>
      <AuthProvider>
        <Router> 
        <Nav />
          <Container className="body">
            <div className="w-100" style={{ maxWidth: '75%' }}>                        
                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <PrivateRoute path="/profile" component={Profile} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                  </Switch>             
            </div>
          </Container>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
