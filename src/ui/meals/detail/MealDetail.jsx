import React, {
    useState,
    useEffect
} from 'react';
import styled from 'styled-components';

import {
    Text,
    Loader
} from 'common/components';

import {
    FontSizes,
    colors
} from 'common';

import { 
    MealInfo,
    MealDirections
} from './components';

import {
    DataStore
} from 'common/dataStore';

import {
    getMeal
} from 'actions';

export const MealDetail = props => {
    const [loading, setLoading] = useState(false);
    const [meal, setMeal] = useState(null)
    const [mealId, setMealId] = useState(props.mealId);

    // console.log(mealId)
    
    const fetchMeal = async() => {
        // debugger;
        setLoading(true);
        await getMeal(mealId)
        .then(data => setMeal(data))
        .catch(err => console.log(err))
        setLoading(false);
    };

    useEffect(() => {
        // setMealId(props.mealId)
        fetchMeal()
        
    }, [mealId])

    useEffect(() => {
        setMealId(props.mealId)
    });

    // console.log(meal)
    
    return (
        <Container>
            {!loading ? ( 
                    <>
                        {meal && 
                            <>
                                <MealInfo 
                                    meal={meal}
                                    onClose={props.onClose}
                                    onReload={() => props.onReload()}
                                    onHardReload={() => props.onHardReload()}
                                />

                                <MealDirections 
                                    meal={meal}
                                    onReload={() => fetchMeal()}
                                />
                            </>
                        }
                    </>

                ) : (

                <Loader 
                    spinnerColor={colors.white}
                    size="35px"
                    label="Loading..."
                    color={colors.white}
                  />
            )}
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    padding: 0 2rem;
`
