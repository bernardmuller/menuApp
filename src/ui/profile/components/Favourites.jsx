import React from 'react';
import styled from 'styled-components';
import meal from 'assets/images/meal.png'

import { 
    Text 
} from 'common/components';

import {
    colors,
    FontSizes
} from 'common'

const MealItem = props => {
    return (
        <MealContainer>
            <Image src={meal} alt="meal image" />
            <MealText>
                <Text
                    fontSize={FontSizes.Small}
                >
                    Meal Name
                </Text>
                <Text
                    color={colors.grey_dark}
                    fontSize={FontSizes.Smaller}
                    margin="0"
                >
                    Times eaten: 3
                </Text>
            </MealText>
        </MealContainer>
    )
}

export const Favourites = props => {
    const meals = ["1", "2", "3", "4"]
  return (
    <Container>
        <Text
            fontSize={FontSizes.Big}
            padding="0 0 0.6rem 0"
            margin="0 0 0.5rem 0"
            style={{borderBottom: `1px solid ${colors.grey_light}`}}
        >
            Favourites
        </Text>

        {meals.map(meal => (
            <MealItem />
        ))}
    </Container>
  )
};

const Container = styled.div`
    display: grid;
    width: 100%;
    text-align: center;
    gap: 0.5rem;
`

const MealContainer = styled.div`
    display: flex;
    padding: 0.4rem 0.8rem;
    align-items: center;
    gap: 1rem;
    border-radius: 4px;
    background-color: ${colors.white_dark};
`

const Image = styled.img`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;

`

const MealText = styled.div`
    display: grid;
`