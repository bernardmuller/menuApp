/* eslint-disable jsx-a11y/alt-text */
import React, { 
    useContext,
    useEffect 
} from 'react';
import styled from 'styled-components';

import meal from 'assets/images/meal.png';
import meal2 from 'assets/images/pizza_bg.jpg';

import { 
    ActiveViewContext 
} from "contexts/ActiveViewContext";

import {
    MealCard,
    ContentCenterContainer,
    MealsCollectionHeading
} from 'common/components';

import {
    PrivateContainer,
    Images
} from 'common';


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
    margin-top: 1rem;
    width: 70%;
    /* height: 90%; */
    padding: 2.5rem;
    background-color: #1F1D2B;
    border-radius: 1rem;
`


export const Meals = () => {    

    const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        activeContext.dispatch({ type: "MEALS" });
    }, [])

    return (

        <PrivateContainer>
            <ContentCenterContainer>

                <Container>
                    
                    <MealsCollectionHeading />

                    <MealsContainer>
                        

                        <MealCard 
                            img={meal} 
                            title="Chicken noodle soup"
                            tag="winter"
                            count="5"
                        />           
                        <MealCard 
                            img={meal2} 
                            title="Pizza"
                            tag="Summer"
                            count="12"
                        />           
                        <MealCard 
                            img={meal} 
                            title="Chicken noodle soup"
                            tag="winter"
                            count="5"
                        />           
                        <MealCard 
                            img={meal2} 
                            title="Pizza"
                            tag="Summer"
                            count="12"
                        />           
                        <MealCard 
                            img={meal} 
                            title="Chicken noodle soup"
                            tag="winter"
                            count="5"
                        />           
                        <MealCard 
                            img={meal2} 
                            title="Pizza"
                            tag="Summer"
                            count="12"
                        />           
                        <MealCard 
                            img={meal} 
                            title="Chicken noodle soup"
                            tag="winter"
                            count="5"
                        />           
                        <MealCard 
                            img={meal2} 
                            title="Pizza"
                            tag="Summer"
                            count="12"
                        />           
                       
                        
                    </MealsContainer>
                </Container>

            </ContentCenterContainer>
        </PrivateContainer>

    )
};

