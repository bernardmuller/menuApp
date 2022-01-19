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
    PrivateContainer,
    Images,
    colors,
    FontSizes
} from 'common';

import { 
    MealInfo,
    MealDirections
} from './components';

async function getMeal(url) {
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

export const MealDetail = props => {
    const [loading, setLoading] = useState(false);
    const [meal, setMeal] = useState({})
    
    useEffect(async() => {
        setLoading(true);
        await getMeal(`https://munchies-api-5fqmkwna4q-nw.a.run.app/meals/${props.mealId}`)
        .then(data => setMeal(data))
        .finally(() => {
            setLoading(false);
        })
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
