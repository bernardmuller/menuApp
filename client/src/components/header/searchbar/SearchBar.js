import React, { useContext } from 'react';
import styled from 'styled-components';
import colors from 'utils/colors';
import { ThemeContext } from 'contexts/ThemeContext';

const SearchContainer = styled.div`
    z-index: 5;
    height: 150px;
    width: 60%;
    background-color: ${props => props.darkMode? colors.light.black : colors.white};
    position: absolute;
    bottom: -1rem;
    border-radius: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.darkMode? colors.transparent : " rgba(0, 0, 0, 0.24) 0px 3px 8px;" };

    input {
        width: 75%;
        height: 3.6rem;
        border-radius: 1.8rem 0px 0px 1.8rem;
        padding-left: 3rem;
        border: ${props => props.darkMode? colors.transparent : `1px solid ${colors.light.grey}`};
        font-size: 18px;
    }

    input:focus {
        outline: none;
    }
    
    button {
        width: 15%;
        height: 3.6rem;
        border-radius: 0px 1.8rem 1.8rem 0px;
        font-size: 18px;
        border: transparent;
        background-color: ${colors.primary};
        color: ${colors.white}
    }

    button:hover {
        background-color: ${colors.light.primary};
    }

    button:active {
        transform: scale(0.99);
        transform-origin: left;
    }
`

const SearchBar = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <SearchContainer darkMode={darkMode}>
            <input type="text" placeholder="Search Meal" />
            <button>Search</button>
        </SearchContainer>
    )
}

export default SearchBar
