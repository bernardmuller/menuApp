import React, { useContext } from 'react'
import styled from "styled-components"
import colors from 'utils/colors'
import { ThemeContext } from "contexts/ThemeContext";
import { IconContext } from "react-icons";

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

const NavIcon = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    

    span {        
        z-index: 0;
        opacity: 0;
        position: absolute;
        color: ${colors.black};
        left: 0;
        margin-left: 2.5rem;
        transition: opacity 400ms ease-in-out;        
        transition: margin-left 200ms;
        background-color: whitesmoke;
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-size: 16px;
        font-weight: 400;
    }
    
    &:hover span {
        z-index: 0;
        opacity: 1;
        margin-left: 3rem;
    }
`

export default function NavOption({ title, Icon }) {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <NavOptionContainer darkMode={darkMode}>       
            <IconContext.Provider value={{size: "26px"}}>
                {Icon && 
                    <NavIcon
                        title={title}
                    >
                        <Icon />
                        <span>{title}</span>
                    </NavIcon>

                }
            </IconContext.Provider>
        </NavOptionContainer>
    )
}
