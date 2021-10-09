import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import colors from 'utils/colors';
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "contexts/ThemeContext";

const Header = styled.h1`
    display: flex;
    text-decoration: none !important;
    color: ${colors.white};
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 26px;
    position:relative;
    top: 0.4rem;
    

    Link {
        text-decoration: none !important;
    }

    &:hover {
        cursor: pointer;
    }
    
    &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: ${colors.primary};
        cursor: pointer;
        
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 250ms ease-in
    }

    &:hover::after {
        transform: scaleX(1);   
        transform-origin: left;
    }

    div + div {
        color: ${props => props.darkMode? colors.primary : colors.white};
    }
`

const NavHeader = (props) => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode; 
    const history = useHistory()
  
    return (
        
        <Header 
            onClick= {() => {history.push('/dashboard')}} 
            darkMode={darkMode}
        >
            <div>Menu</div><div>Manager</div>
        </Header>
        
    )
}

export default NavHeader
