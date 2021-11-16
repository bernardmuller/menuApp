import React from 'react';
import styled from 'styled-components';

import {
    Text, 
    H2,
    H3 
} from 'common/components'

import {
    colors, 
    FontSizes,
    FontFamilies
} from 'common';

const Header = styled.div`
    width: 100%;
`

const Section1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    input {
        height: 3rem;
        padding-left: 1rem;
    }
`

const Section2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${colors.grey};
    padding-top: 1rem;
    padding-bottom: 1rem;

    select {
        height: 3rem;
        width: 6rem;
        padding: 5px
    }
`

export const MealsCollectionHeading = () => {
    return (
        <Header>

            <Section1>
                <div>
                    <H2
                        color={colors.white}
                        margin="0 0 0.5rem 0"
                    >
                        Meals Collection
                    </H2>
                    <Text
                        color='#E0E6E9'
                        margin="0 0 3rem 0"
                        fontFamily='Roboto'
                    >
                        Tuesday, 2 Feb 2021 - Sunday, 7 Feb 2021
                    </Text>
                </div>

                {/* Turn into component */}
                <input 
                    type="text" 
                    placeholder="Search meal"
                />

            </Section1>

            <Section2>

                <H3
                    color={colors.white}
                    fontSize={FontSizes.Big}
                    margin="0 0 0.5rem 0"
                >
                    Meals
                </H3>


                {/* Change to Component */}
                <select name="grid-list" id="">
                    <option value="">Grid</option>
                    <option value="">List</option>
                </select>

            </Section2>

        </Header>
    )
};
