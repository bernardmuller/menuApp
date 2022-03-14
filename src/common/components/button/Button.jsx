import styled from "styled-components";

import { 
    colors,
    FontSizes
} from 'common';

import {
    Loader,
} from 'common/components';


const ButtonBase = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width: ${(props) => props.width || "60%" };
    height: ${(props) => props.height || "2.5rem" };
    border-radius: ${props => props.borderRadius || "6px" };
    font-size: ${props => props.fontSize};
    transition: transform 100ms ease-in-out;
    margin: ${props => props.margin || ''};
    box-shadow: rgba(104, 191, 80, 0.50) 0px 5px 15px;
    align-self: ${props => props.alignSelf || "" };
    justify-self: ${props => props.justifySelf || "" };

    &:hover {
        cursor: ${props => props.disabled ? "": "pointer"}; 
        /* background-color: ${props => props.disabled ? `${colors.grey_light}` : "#283361"}; */
    }
`;

const Primary = styled(ButtonBase)`   
    color: ${props => props.disabled ? `${colors.black}` : `${colors.white}`};
    border: ${colors.white};
    background-color: ${props => props.disabled ? `${colors.disabled}` : `${colors.primary}` };

    &:hover {
        cursor: ${props => props.disabled ? "": "pointer"}; 
        background-color: ${props => props.disabled ? colors.disabled : colors.primary_light};
    }

    &:active {
        background-color: ${colors.primary_dark}; 
    }
`;

const Secondary = styled(ButtonBase)`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    width: ${(props) => props.width};
    height: ${(props) => props.height};     
    border: none;
    font-size: ${props => props.fontSize};
    box-shadow: none;


    color: ${props => props.disabled ? `${colors.white}` : `${colors.secondary}` };
    border: ${props => props.disabled ? `${colors.black}` : `${colors.white}`};
    background-color: ${props => props.disabled ? `${colors.grey_light}` : `${colors.white}`};

    &:hover {
        cursor: ${props => props.disabled ? "": "pointer"}; 
        color: ${props => props.disabled ? `${colors.black}` : `${colors.secondary}` };
        background-color: ${props => props.disabled ? `${colors.grey_light}` : `${colors.white_dark}`};
        box-shadow: #ffffff7f 0px 5px 15px;

    }

`;

const Tertiary = styled(ButtonBase)`    
    color: ${colors.white};
    border: 1px solid ${colors.grey};
    background-color: ${colors.grey};
    box-shadow: rgba(255, 255, 255, 0.30) 0px 2px 10px;


    &:hover {
        cursor: ${props => props.disabled ? "": "pointer"}; 
        color: ${props => props.disabled ? "white" : "white" };
        background-color: ${props => props.disabled ? `${colors.grey_light}` : `${colors.grey_light}`};
    }
`;

const Inline = styled.button`    
    color: ${colors.black};
    background: none;
    font-size: ${props => props.fontSize || FontSizes.Regular};
    font-weight: ${props => props.fontWeight || "Bold"};
    border: none;

    &:hover {
        cursor: ${props => props.disabled ? "": "pointer"}; 
    };

    &:active {
        transform: scale(0.99);
    };
`;


export const Button = (props) => {

    

    if (props.primary) {

        return (

            <Primary
                fontSize={props.fontSize}
                width={props.width}
                height={props.height}
                disabled={props.disabled}
                onClick={props.onClick}
                borderRadius={props.borderRadius}
                margin={props.margin}
            >

                { props.showLoading ?
                    <Loader
                        backgroundColor={colors.Grey}
                        spinnerColor={colors.white}
                        size={30}
                    />

                    : props.children
                }                

            </Primary>

        )

    };

    if (props.secondary) {

        return (

            <Secondary
                fontSize={props.fontSize}
                width={props.width}
                height={props.height}
                disabled={props.disabled}
                onClick={props.onClick}
                borderRadius={props.borderRadius}
                margin={props.margin}
            >
                {props.children}
            </Secondary>

        )

    };

    if (props.tertiary) {

        return (

            <Tertiary
                fontSize={props.fontSize}
                width={props.width}
                height={props.height}
                disabled={props.disabled}
                onClick={props.onClick}
                borderRadius={props.borderRadius}
                margin={props.margin}
            >
                {props.children}
            </Tertiary>

        )
    };

    if (props.inline) {

        return (

            <Inline
                fontSize={props.fontSize}
                width={props.width}
                height={props.height}
                disabled={props.disabled}
                onClick={props.onClick}
            >
                {props.children}
            </Inline>

        )
    }

    return (

        <button>{props.children}</button>

    )
};