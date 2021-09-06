import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "../../App.module.css";
import './ThemeButton.module.css'

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export default function SwitchButton() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;  


  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });      
    } else {
      theme.dispatch({ type: "DARKMODE" });      
    }
  };

  return (
    <div>
      {
        darkMode ? <Brightness7Icon className='button_Icon' onClick={onClick} style={{fill: 'white'}} /> :
        <Brightness4Icon className='button_Icon' onClick={onClick} style={{fill: 'black'}} />
      }     
      
    </div>
  );
}