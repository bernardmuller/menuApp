import React from 'react';
import styled from 'styled-components';

import {
    H3
} from 'common/components';

import {
    colors,
    FontSizes
} from 'common';

import mealimg from 'assets/images/meal.png';
import { 
    MealCard,
    Button 
} from 'common/components';

export const AddMealsTab = props => {
    //todo
    // integrate getAll Meals
    const meals = ["1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3"];

    return (
        <Container>
            <Header>
                <H3
                    color={colors.grey}
                >
                    Add Meals
                </H3>

                <ButtonsContainer>
                    <Button 
                        secondary
                        width='120px'
                        onClick={() => props.onCancel()}
                    >
                        Cancel
                    </Button>

                    <Button 
                        primary
                        width='120px'
                        onCkick={() => props.onAddMeals()}
                    >
                        Save
                    </Button>
                </ButtonsContainer>

            </Header>
            <MealsContainer>
                {meals.map((meal, index) => (

                    <MealCard 
                        img={meal.image || mealimg} 
                        name={"Meal name"}
                        season={"Season"}
                        count={2}
                        key={index}
                        secondary
                        onClick={() => {
                            
                        }}
                    />

                ))}
            </MealsContainer>
      </Container>
  );
};

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    display: grid;

`

const MealsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`