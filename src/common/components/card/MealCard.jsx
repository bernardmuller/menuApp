import React from 'react';
import styled from 'styled-components';

import { 
    FontSizes,
    colors
} from 'common';


import {
    Text,
    H4
} from 'common/components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 210px;
    height: 275px;
    position: relative;
    margin: 0.2rem;
`

const Background = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background-color: ${colors.secondary};
    position: relative;
    bottom: 0; 
    padding: 1.5rem;
`

const ImageContainer = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    object-fit: contain;
    overflow: hidden;
    top: 0;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`


export const MealCard = props => {
    return (
        <Container>
            
            <ImageContainer>
                <img src={props.img} alt="meal" />
            </ImageContainer>

            <Background>

                <H4
                    color="white"
                    margin="115px 0 0 0"
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

                <Text
                    color="#ABBBC2"
                    fontSize={FontSizes.Smaller}
                >
                    {`Times eaten: ${props.count}`}
                </Text>

            </Background>

        </Container>
    )
};

