import React, { useContext } from "react";
import styled from 'styled-components';
import { ThemeContext } from "contexts/ThemeContext";
import colors from 'utils/colors';
import "App.module.css";
// import './ThemeButton.module.css'

// import Brightness7Icon from '@material-ui/icons/Brightness7';
// import Brightness4Icon from '@material-ui/icons/Brightness4';

const ButtonIcon = styled.div`
  height: 30px;
  width: 30px;

  &:hover {
    color: #b93a3a;
    cursor: pointer;
  }
`


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
    <ButtonIcon>
      {/* {
        darkMode ? <Brightness7Icon onClick={onClick} style={{fill: `${colors.white}`, width: "100%", height: "100%"}} /> :
        <Brightness4Icon onClick={onClick} style={{fill: `${colors.white}`, width: "100%", height: "100%"}} />
      }      */}
      
    </ButtonIcon>
  );
}