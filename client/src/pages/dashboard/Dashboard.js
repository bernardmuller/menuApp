/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from 'contexts/ThemeContext';
import Header from 'components/header/Header';

import pizza_bg from 'assets/images/pizza_bg.jpg';
import Heading from 'components/header/heading/Heading';

export default function Dashboard() {    
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <Header backgroundImg={pizza_bg} ObjPos={"100% 25%"}>
                <Heading />
            </Header> 
        </div>
    )
}


