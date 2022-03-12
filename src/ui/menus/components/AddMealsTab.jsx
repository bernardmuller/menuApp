import React, {
    useEffect,
    useState
} from 'react';
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
    Button,
    Text
} from 'common/components';

import {
    getMeals,
    addMealsToMenu
} from 'actions';
import { Loader } from 'common/components/loader/Loader';

export const AddMealsTab = props => {
    //todo
    // integrate getAll Meals
    const [meals, setMeals] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [loading, setLoading] = useState(false);
    const [newMeals, setNewMeals] = useState([])

    const addMeal = (id) => {
        let temp = newMeals;
        temp.push(id);
        setNewMeals(temp);
        console.log(temp)
    };

    const saveNewMeals = async() => {
        setLoading(true)
        await addMealsToMenu(props.id, {meals: newMeals})
            .then(() => props.onCancel())
            .catch((err) => console.log(err))
        setLoading(false)
    }

    useEffect(async() => {
            setFetching(true);
            await getMeals()
            .then(data => setMeals(data))
            .catch((err) => console.log(err))
            setFetching(false);

    }, [])

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
                        onClick={saveNewMeals}
                    >
                        {loading? (
                            <Loader 
                                spinnerColor={colors.white}
                                size="20px"
                            />
                        ):(
                            <Text
                                fontSize={FontSizes.Small}
                                color={colors.white}
                            >
                                Save
                            </Text>
                        )}
                    </Button>
                </ButtonsContainer>

            </Header>
            <MealsContainer>
                {!fetching ? (
                    <>
                        {meals.length > 0 ? (meals && meals.map((meal, index) => (
                            <MealCard 
                                img={meal.image || mealimg} 
                                name={meal.name}
                                season={meal.season}
                                count={2}
                                key={index}
                                secondary
                                onClick={() => {

                                        addMeal(meal._id)
                                }}
                            />
                        ))):(
                            <Container>
                                <Text
                                    fontSize={FontSizes.Small}
                                    color={colors.grey}
                                >
                                    Yout don't have any meals in your collection to add to a menu.
                                </Text>
                            </Container>
                        )}
                    </>
                ) : (
                    <Loader
                        spinnerColor={colors.grey}
                    />
                )}
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