import React, { useContext } from "react"
import Signup from "./pages/signin/Signup"

import { AuthProvider } from "./contexts/AuthContext"
import { ThemeContext } from "./contexts/ThemeContext"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./pages/forgot-password/ForgotPassword"
import UpdateProfile from "./pages/profile/update-profile/UpdateProfile"
import Nav from "./components/Navbar/Nav"
import Container from "./components/UI/container/Container"
import Dashboard from "./pages/dashboard/Dashboard"
import Splash from "./pages/splash/Splash"

import styles from './App.module.css'
import Footer from "./components/Footer/Footer"

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? styles.app_dark : styles.app_light}>
      <AuthProvider>
        <Router> 
        <Nav />
          <Container>
            <div>                        
                  <Switch>
                    {/* <Route exact path="/" component={Splash} /> */}
                    <Route path="/Dashboard" component={Dashboard} />
                    {/* <PrivateRoute path="/profile" component={Profile} /> */}
                    {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
                    {/* <Route path="/signup" component={Signup} /> */}
                    {/* <Route path="/login" component={Login} /> */}
                    {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
                  </Switch>             
            </div>
          </Container>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
