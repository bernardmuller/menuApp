import React, {
    useState,
    useEffect
} from 'react';

import styled from 'styled-components';

import { 
    colors
} from 'common';

import { IoSearchSharp } from "react-icons/io5";


const SearchInput = styled.input`
    border: none;
    background: none;
    color: ${colors.secondary};
    width: 100%;

    &:focus {
        outline: none;
    }
`

const Container = styled.div`
    width: 100%;
    height: 3rem;
    border: ${props => props.focus ? `1px solid ${colors.secondary}` : `1px solid ${colors.grey_light}`};
    padding: 0 0 0 0.7rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
`

export const Searchbar = props => {
    const [searchText, setSearchText] = useState("");
    const [focus, setFocus] = useState(false);

    const handleChange = (e) => {
        setSearchText(e.target.value)
    };

    useEffect(() => {
        props.onSearch(searchText)
    }, [searchText])

    return (
        <Container
            focus={focus}
        >

            <IoSearchSharp 
                size={25}
            />

            <SearchInput
                type="text"
                placeholder={props.placeholder|| "Search"}
                onChange={handleChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />

        </Container>
    )
};

