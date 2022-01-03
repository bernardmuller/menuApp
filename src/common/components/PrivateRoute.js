import React from "react";

import { 
  Route, 
  Redirect 
} from "react-router-dom"



export const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <></>
    // <Route
    //   {...rest}
    //   render={props => {
    //     return currentUser ? <Component {...props} /> : <Redirect to="/login" />
    //   }}
    // />

  )
};
