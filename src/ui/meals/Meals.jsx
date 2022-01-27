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

import {CreateMeal} from './create-meal'

import { useHistory } from 'react-router';
import { MealDetail } from './detail';


export const Meals = () => {
    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterText, setFilterText] = useState('');
    const history = useHistory();
    const activeContext = useContext(ActiveViewContext);
    const [viewMeal, setViewMeal] = useState(false);
    const [mealId, setMealId] = useState();
    const [user, setUser] = useState(DataStore.get("LOGGED_IN_USER"))
    const [createMeal, setCreateMeal] = useState(false);

    useEffect(() => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'true');
        headers.append('Authorization', `Bearer ${user.token}`);

        async function getData(url) {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                redirect: 'follow',
                credentials: 'include',
                headers: headers,  
            })
            return response.json();
        }

        setLoading(true);
        getData('https://munchies-api-5fqmkwna4q-nw.a.run.app/meals')
        .then(data => setMeals(data))
        .finally(() => {
            setLoading(false)
        })
        .catch(err => console.log(err))
        

        activeContext.dispatch({ type: "MEALS" });
    }, [])

    const handleViewMeal = id => {
        setViewMeal(false)
        setMealId(id)
        setViewMeal(true)

    }

    // console.log(mealId)
    
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

                                {meals.map((meal, index) => (
                                        <MealCard 
                                            img={meal.image || mealimg} 
                                            name={meal.name}
                                            season={meal.season}
                                            count={meal.eaten}
                                            key={index}
                                            onClick={() => {
                                                setCreateMeal(false);
                                                handleViewMeal(meal._id);
                                            }}
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
                                }
                                
                            </MealsContainer>

                            <Button
                                primary
                                width="100%"
                                height="4rem"
                                fontSize={FontSizes.Regular}
                                onClick={() => {
                                    setViewMeal(false);
                                    setCreateMeal(true);
                                }}
                                margin="1rem 0 0 0"
                            >
                                Create Meal
                            </Button>

                        </Container>

                    ) : (
                    
                        <Loader 
                            spinnerColor={colors.black}
                            size="35px"
                            label="Loading..."
                        />
                            
                    )

                }
                </LeftWrapper>
                <RightWrapper>

                    {!loading ? (
                        <>
                            {viewMeal && 
                                <MealDetail 
                                    mealId={mealId}
                                    onClose={() => setViewMeal(false)}
                                />
                            }
        
                            {createMeal && 
                                <CreateMeal 
                                    onClose={() => setCreateMeal(false)}
                                />
                            }
                        </>
                    ) : (
                        <Loader 
                            spinnerColor={colors.white}
                            color={colors.white}
                            size="35px"
                            label="Loading..."
                        />
                    )}

                    
                </RightWrapper>
                

            {/* </ContentContainer> */}
        </PrivateContainer>

    )
};

const MealsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
    overflow-y: scroll;
    padding: 0 0 0 1.5rem;
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

const AddMeal = styled.button`
    width: 150px;
    height: 200px;
    padding: 1rem 1rem 2.5rem 1rem;
    border: 3px dashed ${colors.secondary};
    border-radius: 1rem;
    background: none;
    color:${colors.grey_dark};
    font-size: ${FontSizes.Small};
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: translateY(-0.05rem);
        box-shadow:  rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset;
        cursor: pointer;
    }
`

const LeftWrapper = styled.div`
    height: 100%;
    width: 30%;
    background-color: ${colors.white};
`
const RightWrapper = styled.div`
    height: 100%;
    width: calc(100% - 30%);
    padding: 1.5rem;
`
