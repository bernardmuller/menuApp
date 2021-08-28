import React from "react"
import Signup from "./Signup"

import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./Profile"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Nav from "./Navbar/Nav"
import Container from "./UI/Container"
import Dashboard from "./Dashboard"

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router> 
        <Nav />
          <Container className="body">
            <div className="w-100" style={{ maxWidth: "400px" }}>                        
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
