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
    border-radius: ${props => props.borderRadius || "3rem" };
    font-size: ${props => props.fontSize};
    transition: transform 100ms ease-in-out;
    margin: ${props => props.margin || ''};
    box-shadow: rgba(104, 191, 80, 0.50) 0px 5px 15px;

    &:hover {
        cursor: ${props => props.disabled ? "": "pointer"}; 
        /* background-color: ${props => props.disabled ? `${colors.lightGrey}` : "#283361"}; */
    }
`;

const Primary = styled(ButtonBase)`   
    color: ${props => props.disabled? `${colors.black}` : `${colors.white}`};
    border: ${colors.white};
    background-color: ${props => props.disabled ? `${colors.lightGrey}` : `${colors.primary}` };

    &:hover {
        cursor: ${props => props.disabled ? "": "pointer"}; 
        /* background-color: ${props => props.disabled ? `${colors.lightGrey}` : "#283361"}; */
    }

    &:active {
        background-color: #283361; 
    }
`;

const Secondary = styled(ButtonBase)`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    width: ${(props) => props.width};
    height: ${(props) => props.height};     
    border-radius: 3rem;
    border: none;
    font-size: ${props => props.fontSize};

    color: ${props => props.disabled ? `${colors.white}` : `${colors.black}` };
    border: ${props => props.disabled ? `${colors.black}` : `${colors.white}`};
    background-color: ${props => props.disabled ? `${colors.lightGrey}` : `${colors.white}`};

    &:hover {
        cursor: ${props => props.disabled ? "": "pointer"}; 
        color: ${props => props.disabled ? "black" : "#fff" };
        background-color: ${props => props.disabled ? `${colors.lightGrey}` : `${colors.white}`};
    }

`;

const Tertiary = styled(ButtonBase)`    
    color: ${colors.black};
    border: 1px solid ${colors.grey};
    background-color: ${colors.white};

    &:hover {
        cursor: ${props => props.disabled ? "": "pointer"}; 
        color: ${props => props.disabled ? "black" : "black" };
        background-color: ${props => props.disabled ? `${colors.lightGrey}` : `${colors.white}`};
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
                        size={50}
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