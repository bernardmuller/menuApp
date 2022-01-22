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
    FontSizes
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
        getMeal(`https://munchies-api-5fqmkwna4q-nw.a.run.app/meals/${props.mealId}`)
        .then(data => setMeal(data))
        .finally(() => {
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, [])

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
            )}
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
`
