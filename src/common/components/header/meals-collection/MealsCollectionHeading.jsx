import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


import {
    Text, 
    H2,
    H3,
    Searchbar
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

export const MealsCollectionHeading = (props) => {
    

    const handleSearch = (searchText) => {
        props.onSearch(searchText)
    };

    const handleFilter = (filter) => {
        props.onFilter(filter)
    };

    

    return (
        <Header>

            <Section1>
                <div>
                    <H2
                        color={colors.secondary}
                        margin="0 0 0.5rem 0"
                    >
                        Meals Collection
                    </H2>
                    <Text
                        color={colors.secondary}
                        margin="0 0 3rem 0"
                        fontFamily='Roboto'
                    >
                        Tuesday, 3 Feb 2021 - Sunday, 7 Feb 2021
                    </Text>
                    
                </div>

                {/* Turn into component */}
                <Searchbar
                    onSearch={handleSearch}
                />

            </Section1>

            <Section2>

                <H3
                    color={colors.secondary}
                    fontSize={FontSizes.Regular}
                    margin="0 0 0.5rem 0"
                >
                    Total meals: {props.count}
                </H3>



                <div>

                    {/* Change to Component */}
                    <select 
                        name="grid-list" id="" 
                        style={{width: "120px"}}
                        onChange={handleFilter}
                    >
                        <option value="All">All</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                    </select>

                    {/* Change to Component */}
                    <select name="grid-list" id="">
                        <option value="">Grid</option>
                        <option value="">List</option>
                    </select>

                </div>

            </Section2>

        </Header>
    )
};
