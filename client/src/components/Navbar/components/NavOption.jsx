import React, { useContext } from 'react'
import styled from "styled-components"
import colors from 'utils/colors'
import { ThemeContext } from "contexts/ThemeContext";

const NavOptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    color: ${colors.white};
    cursor: pointer;
    text-decoration: none;
    margin: 0;
    margin-left: 10px;
    margin-right: 10px;
    transition: color ease-in 125ms;

    &:hover {
        color: ${props => props.darkMode ? colors.primary : colors.white};
    }
`

const NavOptionTitle = styled.h3`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        display: block;
        bottom: -2;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: ${colors.primary};
        
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 200ms ease-in
    }

    &:hover::after {
        transform: scaleX(1);   
        transform-origin: left;
    }
`


export default function NavOption({ title }) {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <NavOptionContainer darkMode={darkMode}>            
            <NavOptionTitle darkMode={darkMode}>{title}</NavOptionTitle>
        </NavOptionContainer>
    )
}
