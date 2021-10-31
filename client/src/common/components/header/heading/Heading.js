import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors } from 'common';
import { ThemeContext } from 'contexts/ThemeContext';

const HeadingContainer = styled.div`
    z-index: 5;
    height: 150px;
    width: 60%;
    background-color: ${props => props.darkMode? colors.light.black : colors.white};
    position: absolute;
    bottom: -1rem;
    border-radius: 0.6rem;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    box-shadow: ${props => props.darkMode? colors.transparent : " rgba(0, 0, 0, 0.24) 0px 3px 8px;" };

    h2 {
        color: ${colors.white};
        text-decoration: none;
    }
`

const Heading = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <HeadingContainer darkMode={darkMode}>
            <h2>Heading goes here</h2>
        </HeadingContainer>
    )
};

export default Heading;
