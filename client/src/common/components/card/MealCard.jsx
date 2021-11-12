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
    width: 210px;
    height: 275px;
    position: relative;
`

const Background = styled.div`
    height: 245px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background-color: #1F1D2B;
    position: relative;
    bottom: 0; 
    top: 30px;
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
    /* border: 2px solid white; */
`
const Image = styled.img`
    height: 100%;
    
    
`


export const MealCard = props => {
    return (
        <Container>
            
            <ImageContainer>
                <Image src={props.img} alt="meal" />
            </ImageContainer>

            <Background>

                <H4
                    color="white"
                    margin="115px 0 0 0"
                    fontSize={FontSizes.Small}
                    textAlign='center'
                >
                    Beef dumpling in hot and sour soup
                </H4>

                <Text
                    color="#50D1AA"

                    fontSize={FontSizes.Smaller}

                >
                    Season
                </Text>

                <Text
                    color="#ABBBC2"
                    fontSize={FontSizes.Smaller}
                >
                    Times eaten
                </Text>

            </Background>

        </Container>
    )
};

