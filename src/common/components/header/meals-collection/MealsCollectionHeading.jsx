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

const Heading = styled.div`
    width: 100%;
    padding: 0 0 1rem 0;

    input {
        height: 3rem;
        padding-left: 1rem;
    }
`

const Sort = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid ${colors.grey};
    padding-bottom: 1rem;
    gap: 0.5rem;
    align-items: center;

    select {
        height: 2rem;
        width: 6rem;
        padding: 5px;
        border-radius: 4px;
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

            <Heading>
                <div>
                    <H2
                        color={colors.secondary}
                        margin="0 0 0.5rem 0"
                        fontSize={FontSizes.Big}
                    >
                        {props.heading || "heading"}
                    </H2>
                    
                </div>

                {/* Turn into component */}
                <Searchbar
                    onSearch={handleSearch}
                    placeholder={props.searchPlaceholder || "Search"}
                />

            </Heading>

            {props.sort &&
                <Sort>

                    <Text
                        fontSize={FontSizes.Small}
                    >Sort:</Text>
                    
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

                    <select name="grid-list" id="">
                        <option value="">Grid</option>
                        <option value="">List</option>
                    </select>
                    
                </Sort>
            }

        </Header>
    )
};
