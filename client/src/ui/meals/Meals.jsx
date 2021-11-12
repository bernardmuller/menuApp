/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import styled from 'styled-components';

import meal from 'assets/images/meal.png';

import {
    MealCard
} from 'common/components';

import {
    PrivateContainer,
    Images
} from 'common';



export const Meals = () => {    
    return (

        <PrivateContainer>
            <MealCard img={meal} />           
            
        </PrivateContainer>

    )
};

