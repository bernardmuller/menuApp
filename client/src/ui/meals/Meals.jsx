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
    MealsCollectionHeading
} from 'common/components';

import {
    PrivateContainer,
    Images,
    colors
} from 'common';

import {
    mealsData
} from 'variables';


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


export const Meals = () => {
    
    const [searchText, setSearchText] = useState('');
    const [filterText, setFilterText] = useState('');

    let List = mealsData.map((meal) => (
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
        activeContext.dispatch({ type: "MEALS" });
    }, [])

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

                        {MealsList}
                        
                    </MealsContainer>

                </Container>

            </ContentContainer>
        </PrivateContainer>

    )
};

