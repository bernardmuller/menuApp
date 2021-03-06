import React, {useState} from 'react';
import styled from 'styled-components';

import { 
    FontSizes,
    colors
} from 'common';


import {
    Text,
    H4
} from 'common/components';

import food from 'assets/images/food_ph.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 150px;
    height: 200px;
    position: relative;
    margin: 0 0 1rem 0;
    justify-self: center;

    &:hover {
        cursor: pointer;
    }
`

const Background = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background-color: ${props => props.secondary ? colors.secondary_light : colors.secondary};
    position: relative;
    bottom: 0; 
    padding: 1.5rem;
    transition: box-shadow 0.4 ease-in-out;
    /* border: 1px solid ${colors.tertiary_light}; */

    &:hover {
        cursor: pointer;
        background-color: ${colors.secondary_light};
        box-shadow: ${props => props.hover ? "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" : ""};
    }
`

const ImageContainer = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    object-fit: contain;
    overflow: hidden;
    top: 0;
    background-color: ${colors.grey_dark};

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const Placeholder = styled.div`
    height: 100%;
    width: 100%;
    padding: 25%;
`



export const MealCard = props => {
    const [hover, setHover] = useState(false)
    return (
        <Container
            onClick={() => props.onClick()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            
        >
            
            <ImageContainer>
                {props.img ? (
                        <img src={props.img} alt="meal" />
                    ) : (
                        <Placeholder>
                            <img src={food} alt="meal" />  
                        </Placeholder>
                )}
            </ImageContainer>

            <Background
                hover={hover}
                secondary={props.secondary}
            >

                <H4
                    color="white"
                    margin="80px 0 0 0"
                    fontSize={FontSizes.Small}
                    textAlign='center'
                >
                    {props.name}
                </H4>

                <Text
                    color="#B4DFA8"
                    fontSize={FontSizes.Smaller}

                >
                    {props.season}
                </Text>

            </Background>

        </Container>
    )
};

