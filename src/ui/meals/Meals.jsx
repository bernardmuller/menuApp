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
    H3,
    Loader
} from 'common/components';

import {
    PrivateContainer,
    Images,
    colors,
    FontSizes
} from 'common';

import {
    mealsData
} from 'variables';

import {
    DataStore
} from 'common/dataStore';

import { useHistory } from 'react-router';
import { MealDetail } from './detail';




async function getData(url) {
    const response = await fetch(url, {
    //   method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer',
    });
    return response.json();
  }


export const Meals = () => {
    const [loading, setLoading] = useState(true)
    const [meals, setMeals] = useState([])
    const [searchText, setSearchText] = useState('');
    const [filterText, setFilterText] = useState('');
    const history = useHistory();
    const activeContext = useContext(ActiveViewContext);
    const [viewMeal, setViewMeal] = useState(false)
    const [mealId, setMealId] = useState("")

    useEffect(async() => {
        const currentUser = await DataStore.get("LOGGED_IN_USER")

        await getData('https://munchies-api-5fqmkwna4q-nw.a.run.app/meals')
        .then(data => setMeals(data))
        .finally(() => {
            setLoading(false)
        })

        activeContext.dispatch({ type: "MEALS" });
    }, [])

    const handleViewMeal = id => {
        setViewMeal(true)
        setMealId(id)
    }
    
    return (

        <PrivateContainer>
            <ContentContainer>

                {
                    
                    !loading ? ( 
                    
                        <Container>

                            {!viewMeal ? (
                                <>
                                    <MealsCollectionHeading 
                                        onSearch={(text) => {setSearchText(text)}}
                                        onFilter={(filter) => {setFilterText(filter)}}
                                        // count={meals.length}
                                    />

                                    <MealsContainer>

                                        <AddMeal
                                            onClick={() => {
                                                history.push('/meals/create')
                                            }}
                                        >

                                            <H3
                                                fontSize="4rem"
                                                color="#B4DFA8"
                                            >+</H3>
                                            
                                            Add new meal
                                            
                                        </AddMeal>
                                        
                                            {
                                                meals.map((meal, index) => (
                                                    <MealContainer
                                                        key={index}
                                                        onClick={() => handleViewMeal(meal._id)}
                                                    >
                                                        <MealCard 
                                                            img={meal.image || mealimg} 
                                                            name={meal.name}
                                                            season={meal.season}
                                                            count={meal.eaten}
                                                        />
                                                    </MealContainer>

                                                ))
                                                .filter((meal) => {if (searchText === "") {
                                                    return meal;
                                                } else if(meal.name.toLowerCase().includes(searchText.toLowerCase())) {
                                                    return meal;
                                                }})
                                                // .filter((meal) => {if (filterText === "All") {
                                                //     return meal;
                                                // } else if(meal.season.toLowerCase().includes(filterText.toLowerCase())) {
                                                //     return meal;
                                                // }})
                                            }
                                        
                                    </MealsContainer>
                                </>

                            ) : (
                                <MealDetail 
                                    mealId={mealId}
                                    onClose={() => setViewMeal(false)}
                                />
                            )}

                        </Container>

                    ) : (
                        <div
                            style={{ display: 'flex', alignItems: 'center'}}
                        >
                            <Loader />
                            <Text
                                color="white"
                                fontSize={FontSizes.Smaller}
                            >
                                Loading...
                            </Text>
                        </div>
                    )

                }

            </ContentContainer>
        </PrivateContainer>

    )
};

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
    transition: all 150ms ease-in-out;
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
    border: 5px dashed #B4DFA8;
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