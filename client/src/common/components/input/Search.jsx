import React, {
    useState,
    useEffect
} from 'react';

import styled from 'styled-components';

import { 
    colors
} from 'common';

const SearchInput = styled.input`
    border: none;
    border-radius: 0.5rem;
    background-color: ${colors.light.grey};
    color: ${colors.secondary};

`

export const Searchbar = props => {
    const [searchText, setSearchText] = useState("")

    const handleChange = (e) => {
        setSearchText(e.target.value)
    };

    useEffect(() => {
        props.onSearch(searchText)
    }, [searchText])

    return (
        <SearchInput
            type="text"
            placeholder="Search"
            onChange={handleChange}
        />
    )
};

