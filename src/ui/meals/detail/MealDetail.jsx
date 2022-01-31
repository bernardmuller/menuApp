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

export const MealDetail = props => {
    const [loading, setLoading] = useState(false);
    const [meal, setMeal] = useState({})
    const [mealId, setMealId] = useState(props.mealId);
    
    useEffect(() => {
        async function getMeal(url) {
            const user = DataStore.get("LOGGED_IN_USER")
        
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', 'true');
            headers.append('Authorization', `Bearer ${user.token}`);
        
            const response = await fetch(url, {
              method: 'GET', 
              mode: 'cors', 
              credentials: 'include', 
              headers: headers,
              redirect: 'follow', 
              referrerPolicy: 'no-referrer',
            });
            return response.json();
        }
        setLoading(true);
        getMeal(`https://munchies-api-5fqmkwna4q-nw.a.run.app/meals/${mealId}`)
        .then(data => setMeal(data))
        .finally(() => {
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, [mealId])

    useEffect(() => {
        setMealId(props.mealId)
    });

    return (
        <Container>
            {!loading ? ( 
                    <>
                        <MealInfo 
                            meal={meal}
                            onClose={props.onClose}
                        />

                        <MealDirections 
                            meal={meal}
                        />
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
