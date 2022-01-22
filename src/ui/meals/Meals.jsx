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
    const [mealId, setMealId] = useState(meals._id)

    useEffect(async() => {
        const user = await DataStore.get("LOGGED_IN_USER");

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'true');
        headers.append('Authorization', `Bearer ${user.token}`);

        await getData('https://munchies-api-5fqmkwna4q-nw.a.run.app/meals'{
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            credentials: 'include',
            headers: headers,  
        })
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

    console.log(meals)
    
    return (

        <PrivateContainer>

            {/* <ContentContainer> */}
                <LeftWrapper>
                {
                    
                    !loading ? ( 
                    
                        <Container>

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
                                        color={colors.dark.grey}
                                    >+</H3>
                                    
                                    Add new meal
                                    
                                </AddMeal>
                                
                                    {
                                        meals.map((meal, index) => (
                                            // <MealContainer
                                            //     key={index}
                                            //     onClick={() => handleViewMeal(meal._id)}
                                            // >
                                                <MealCard 
                                                    img={meal.image || mealimg} 
                                                    name={meal.name}
                                                    season={meal.season}
                                                    count={meal.eaten}
                                                    key={index}
                                                    onClick={() => handleViewMeal(meal._id)}
                                                />
                                            // </MealContainer>

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

                        </Container>

                    ) : (
                        <div
                            style={{ display: 'flex', alignItems: 'center'}}
                        >
                            <Loader />
                            <Text
                                color="black"
                                fontSize={FontSizes.Smaller}
                            >
                                Loading...
                            </Text>
                        </div>
                    )

                }
                </LeftWrapper>
                <RightWrapper>

                    {viewMeal && 
                        <MealDetail 
                            mealId={mealId}
                            onClose={() => setViewMeal(false)}
                        />
                    }
                    
                </RightWrapper>
                

            {/* </ContentContainer> */}
        </PrivateContainer>

    )
};

const MealsContainer = styled.div`
    display: Flex;
    justify-content: space-evenly;
    /* align-items: center; */
    width: 100%;
    /* height: 100%; */
    flex-wrap: wrap;
    /* overflow-y: scroll; */
`
const Container = styled.div`
    display: Flex;
    flex-direction: column;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1.2rem;
    background-color: ${colors.tertiary};
    /* overflow-y: scroll; */
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
    width: 150px;
    height: 200px;
    padding: 1rem 1rem 2.5rem 1rem;
    border: 3px dashed ${colors.secondary};
    border-radius: 1rem;
    background: none;
    color:${colors.dark.grey};
    font-size: ${FontSizes.Small};
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: translateY(-0.05rem);
        box-shadow:  rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset;
        /* border: 2px dashed ${colors.primary}; */
        cursor: pointer;
        /* border-box: none; */
    }
`

const LeftWrapper = styled.div`
    height: 100%;
    width: 30%;
    background-color: ${colors.tertiary};
`
const RightWrapper = styled.div`
    height: 100%;
    width: calc(100% - 30%);
    padding: 1.5rem;
`
