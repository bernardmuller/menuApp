/* eslint-disable jsx-a11y/alt-text */
import React, { 
    useContext,
    useEffect,
    useState
} from 'react';
import styled from 'styled-components';

// import mealimg from 'assets/images/meal.png';
import meal2 from 'assets/images/pizza_bg.jpg';
import food from 'assets/images/food_ph.png';

import { 
    ActiveViewContext 
} from "contexts/ActiveViewContext";

import {
    MealCardList,
    MealsCollectionHeading,
    Text,
    H3,
    Loader,
    Button
} from 'common/components';

import {
    PrivateContainer,
    Images,
    colors,
    FontSizes
} from 'common';

import {
    DataStore
} from 'common/dataStore';

import {
    createMeal,
    getMeals
} from 'actions';

// import {CreateMeal} from './create-meal'

import { useHistory } from 'react-router';
import { MealDetail } from './detail';


export const Meals = () => {
    const [loading, setLoading] = useState(true);
    const [meals, setMeals] = useState(undefined);
    const [searchText, setSearchText] = useState('');
    const [filterText, setFilterText] = useState('');
    const history = useHistory();
    const activeContext = useContext(ActiveViewContext);
    const [viewMeal, setViewMeal] = useState(false);
    const [mealId, setMealId] = useState();
    const [user, setUser] = useState(DataStore.get("LOGGED_IN_USER"))
    const [creatingMeal, setCreatingMeal] = useState(false);

    const fetchData = async() => {
        setLoading(true)
        const res = await getMeals()
        setMeals(res)
        setLoading(false)
    };

    useEffect(() => {
        // setLoading(true)
        fetchData();
        // setLoading(false)

        activeContext.dispatch({ type: "MEALS" });
    }, []);

    const handleViewMeal = id => {
        setViewMeal(false);
        setMealId(id);
        setViewMeal(true);
    };

    const handleCreateMeal = async() => {
        setCreatingMeal(true);
        const res = await createMeal();
        if(res) fetchData();
        setCreatingMeal(false);
    };

    const hardReload = async() => {
        setViewMeal(false);
        fetchData();
    };
    return (

        <PrivateContainer>

                <LeftWrapper>
                
                    
                        <Container>

                            <MealsCollectionHeading 
                                onSearch={(text) => {setSearchText(text)}}
                                onFilter={(filter) => {setFilterText(filter)}}
                                // count={meals.length}
                                heading="My Meals"
                                searchPlaceholder="Search Meals"
                                // sort
                                loading={loading}
                            />
                            <MealsContainer>
                                {!loading &&
                                    <>
                                        {meals.length > 0 ? ( meals.map((meal, index) => (
                                                <MealCardList 
                                                    img={meal.image} 
                                                    name={meal.name}
                                                    seasons={meal.seasons}
                                                    count={meal.eaten}
                                                    key={index}
                                                    onClick={() => handleViewMeal(meal._id)}
                                                />
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
                                        ) : (
                                            <>
                                                <Text
                                                    fontSize={FontSizes.Small}
                                                    color={colors.grey_light}
                                                    textAlign="center"
                                                >
                                                    You don't have any meals in your collection.
                                                </Text>
                                                <Text
                                                    fontSize={FontSizes.Small}
                                                    color={colors.grey_light}
                                                    textAlign="center"
                                                >
                                                    Create one below.
                                                </Text>
                                            </>
                                        )}
                                    </>
                                }
                            </MealsContainer>

                            <Button
                                disabled={creatingMeal}
                                primary
                                width="100%"
                                height="4rem"
                                fontSize={FontSizes.Regular}
                                onClick={handleCreateMeal}
                                margin="1rem 0 0 0"
                            >
                                {creatingMeal ? (
                                    <Loader 
                                        spinnerColor={colors.white}
                                        size="25px"
                                    />
                                ) : (
                                    <Text
                                        fontSize={FontSizes.Regular}
                                        color={colors.white}
                                    >
                                        Create Meal
                                    </Text>
                                )}
                            </Button>

                        </Container>
                    
                </LeftWrapper>
                <RightWrapper>
                      
                    {viewMeal && 
                        <MealDetail 
                            mealId={mealId}
                            onReload={() => fetchData()}
                            onHardReload={() => hardReload()}
                            onClose={() => setViewMeal(false)}
                        />
                    }

                </RightWrapper>
                

        </PrivateContainer>

    )
};



const MealsContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    width: 100%;
    height: 100%;
    /* flex-wrap: wrap; */
    overflow-y: scroll;
    padding: 1rem 0.5rem 0 1rem;
    ::-webkit-scrollbar { width: 0 !important }
`
const Container = styled.div`
    display: Flex;
    flex-direction: column;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1.2rem;
    background-color: ${colors.white};
    /* overflow-y: scroll; */
`

const LeftWrapper = styled.div`
    height: 100%;
    width: 25%;
    background-color: ${colors.white};
    min-width: 400px;
`
const RightWrapper = styled.div`
    height: 100%;
    width: calc(100% - 25%);
    padding: 1.5rem;
    overflow-y:scroll;
`
