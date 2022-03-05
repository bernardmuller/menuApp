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

import { IoHeartOutline } from "react-icons/io5";


const Container = styled.div`
    display: flex;
    /* align-items: center; */
    /* justify-content: flex-end; */
    /* width: 150px; */
    height: 100px;
    width: 100%;
    /* position: relative; */
    margin: 0 0 0.5rem 0;
    /* justify-self: center; */
    background-color: ${props => props.secondary ? colors.secondary_light : colors.secondary_dark};
    border-radius: 20px;


    &:hover {
        cursor: pointer;
        box-shadow: ${props => props.hover ? "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" : ""};
        background-color: ${colors.secondary_light};
    }
`

const Info = styled.div`
    /* height: 100%; */
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: flex-start; */
    /* background-color: ${props => props.secondary ? colors.secondary_light : colors.secondary}; */
    /* position: relative; */
    /* bottom: 0;  */
    padding: 0.5rem 0.6rem 0 0.5rem;
    transition: box-shadow 0.4 ease-in-out;
    /* border: 1px solid ${colors.tertiary_light}; */

`

const ImageContainer = styled.div`
    height: 100px;
    min-height: 100px;
    width: 100px;
    min-width: 100px;
    border-radius: 20px;
    border: 6px solid ${colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
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



export const MealCardList = props => {
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

            <Info
                hover={hover}
                secondary={props.secondary}
            >
                <Wrapper>
                    <Text
                        color="white"
                        margin="0"
                        fontSize={FontSizes.Regular}
                    >
                        {props.name}
                    </Text>

                    <IoHeartOutline 
                        size={22.5} 
                        color={colors.grey_dark}
                    />

                </Wrapper>

                <Tags>
                    {props.seasons && props.seasons.map((item, index) => (
                        <Text
                            color="#B4DFA8"
                            fontSize={FontSizes.Smaller}

                        >
                            {item}
                        </Text>
                    ))}
                </Tags>


            </Info>

        </Container>
    )
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    gap: 0.5rem;
`