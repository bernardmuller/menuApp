/* eslint-disable jsx-a11y/alt-text */
import React, {useContext} from 'react';
import styled from 'styled-components';

import Card from '../../components/UI/card/Card';
import styles from './Dashboard.module.css';
import AddIcon from '@material-ui/icons/Add';
import { ThemeContext } from '../../contexts/ThemeContext';
import pizza_bg from 'assets/images/pizza_bg.jpg'

const BackgroundImg = styled.div`
    height: 30rem;
    width: 100vw;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 25%;
    }
`


export default function Dashboard() {    
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <BackgroundImg>
                <img src={pizza_bg} />
            </BackgroundImg>
        </div>
    )
}


