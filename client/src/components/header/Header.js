import React, { useContext } from 'react';
import colors from 'utils/colors';
import { ThemeContext } from 'contexts/ThemeContext';
import styled from 'styled-components';
import SearchBar from 'components/header/searchbar/SearchBar';

const Container = styled.div`
    height: 30rem;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
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
        object-position: ${props => props.ObjPos};
    }

    &:after {
        content: '\A';
        position: absolute;
        width: 100%; 
        height:100%;
        top:0; 
        left:0;
        background: rgba(0,0,0,0.2);
        opacity: 1;
        z-index: 1;
    }
`

const Header = ({backgroundImg, ObjPos, children}) => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <Container>
            <BackgroundImg ObjPos={ObjPos}>
                <img src={backgroundImg} />
            </BackgroundImg>
            {children}
        </Container>
    )
}

export default Header;
