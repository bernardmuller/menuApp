/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from 'contexts/ThemeContext';
import SearchBar from './components/SearchBar';

export default function Dashboard() {    
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <SearchBar /> 
        </div>
    )
}


