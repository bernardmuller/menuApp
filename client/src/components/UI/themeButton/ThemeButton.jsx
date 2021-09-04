import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "../../App.module.css";
import './ThemeButton.module.css'

import Brightness5RoundedIcon from '@material-ui/icons/Brightness5Rounded';
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';

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
        darkMode ? <Brightness5RoundedIcon className='button_Icon' onClick={onClick} style={{fill: 'white'}} /> :
        <Brightness2RoundedIcon className='button_Icon' onClick={onClick} style={{fill: 'black'}} />
      }     
      
    </div>
  );
}