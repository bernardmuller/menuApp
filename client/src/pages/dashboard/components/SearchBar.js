import React, { useContext } from 'react';
import colors from 'utils/colors';
import { ThemeContext } from 'contexts/ThemeContext';
import pizza_bg from 'assets/images/pizza_bg.jpg';
import styled from 'styled-components';

const Container = styled.div`
    height: 30rem;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

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

const BackgroundImg = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 25%;
    }

    &:after {
        content: '\A';
        position: absolute;
        width: 100%; 
        height:100%;
        top:0; 
        left:0;
        background:rgba(0,0,0,0.3);
        opacity: 1;
        z-index: 1;
    }
`

const SearchBar = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <Container>
            <BackgroundImg>
                <img src={pizza_bg} />
            </BackgroundImg>
            <SearchContainer darkMode={darkMode}>
                <input type="text" placeholder="Search Meal" />
                <button>Search</button>
            </SearchContainer>
        </Container>
    )
}

export default SearchBar
