import React from 'react';
import styled from 'styled-components';

import {
    H3,
    Text
} from 'common/components'

import {
    FontSizes
} from 'common'

export const MealDirections = props => {
    console.log(props.meal)
    return (
        <Container>

            <DirectionContainer>

                <H3
                    color="white"
                >
                    Directions
                </H3>

                <Text
                    color="#ABBBC2"
                    fontSize={FontSizes.Small}
                >
                    {props.meal.directions}
                </Text>
            </DirectionContainer>

            <IngredientsContainer>

                <H3
                    color="white"
                >
                    Ingredients
                </H3>

                <ul>
                    {/* {props.meal.ingredients.map((item)=> (
                        <li>
                            {item}
                        </li>
                    ))} */}
                </ul>

            </IngredientsContainer>

        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    padding: 2rem 0;
    display:flex;
`

const DirectionContainer = styled.div`
    width: 100%;
    display: grid;
`

const IngredientsContainer = styled.div`
    width: 100%;
    padding: 0 0 0 2.5rem;
    display: grid;
`