/* eslint-disable jsx-a11y/alt-text */
import React, { 
    useContext,
    useEffect,
    useState
} from 'react';
import styled from 'styled-components';

import mealimg from 'assets/images/meal.png';
import meal2 from 'assets/images/pizza_bg.jpg';

import { 
    ActiveViewContext 
} from "contexts/ActiveViewContext";

import {
    MealCard,
    MealsCollectionHeading,
    Text,
    H3
} from 'common/components';

import {
    PrivateContainer,
    Images,
    colors
} from 'common';

import {
    mealsData
} from 'variables';
import { useHistory } from 'react-router';


const MealsContainer = styled.div`
    display: Flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    /* overflow-y: scroll; */
    
`
const Container = styled.div`
    display: Flex;
    flex-direction: column;
    top: 0;
    width: 60%;
    padding: 2.5rem;
    background-color: ${colors.secondary};
    border-radius: 1rem;
`
const ContentContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

`

const MealContainer = styled.div`
    transition: all 250ms ease-in-out;
    margin: 0.5rem;
    border-radius: 1rem;
    padding-top: 1rem;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        /* border: 2px dashed ${colors.primary}; */
        cursor: pointer;
        /* border-box: none; */
    }
`

const AddMeal = styled.button`
    width: 210px;
    height: 275px;
    padding: 2.5rem;
    border: 5px dashed #50D1AA;
    border-radius: 1rem;
    background: none;
    color:#ABBBC2;
    font-size: 1.1rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        /* border: 2px dashed ${colors.primary}; */
        cursor: pointer;
        /* border-box: none; */
    }
`


export const Meals = () => {
    const [meals, setMeals] = useState([])
    const [searchText, setSearchText] = useState('');
    const [filterText, setFilterText] = useState('');
    const history = useHistory();

    let List = meals.map((meal) => (
        <MealCard 
            img={mealimg} 
            name={meal.name}
            season={meal.season}
            count={meal.eaten}
        />
    ))
    .filter((meal) => {if (searchText === "") {
        return meal;
    } else if(meal.props.name.toLowerCase().includes(searchText.toLowerCase())) {
        return meal;
    }})
    .filter((meal) => {if (filterText === "All") {
        return meal;
    } else if(meal.props.season.toLowerCase().includes(filterText.toLowerCase())) {
        return meal;
    }})

    const MealsList = List.map((item) => (
        <MealContainer>
            {item}
        </MealContainer>
    ));

    const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        setMeals(mealsData)

        // fetch('http://localhost:4001/meals')
        //     .then(response => response.json())
        //     .then(data => setMeals(data))

        activeContext.dispatch({ type: "MEALS" });
    }, [])

    console.log(meals)

    return (

        <PrivateContainer>
            <ContentContainer>

                <Container>
                    
                    <MealsCollectionHeading 
                        onSearch={(text) => {setSearchText(text)}}
                        onFilter={(filter) => {setFilterText(filter)}}
                        count={MealsList.length}
                    />

                    <MealsContainer>

                        <AddMeal
                            onClick={() => {
                                history.push('/meals/create')
                            }}
                        >

                            <H3
                                fontSize="4rem"
                                color="#50D1AA"
                            >+</H3>
                            
                            Add new meal
                            
                        </AddMeal>

                        {MealsList}
                        
                    </MealsContainer>

                </Container>

            </ContentContainer>
        </PrivateContainer>

    )
};

