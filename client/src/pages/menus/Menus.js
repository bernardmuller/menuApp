/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from 'contexts/ThemeContext';
import Header from 'components/header/Header';

import sushi_bg from 'assets/images/sushi_bg.jpg'
import SearchBar from 'components/header/searchbar/SearchBar';

export default function Menus() {    
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <Header backgroundImg={sushi_bg} ObjPos={'100% 90%'}>
                <SearchBar />  
            </Header> 
        </div>
    )
}

