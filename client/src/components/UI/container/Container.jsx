import React from 'react';
import styled from 'styled-components';

const ContainerContainer = styled.div`
    display:flex;
    flex-direction: column; 
    align-items:center;   
    width: 100vw;
    min-height: 100vh;
    position: relative;
`

const Container = (props) => {
    return (
        <ContainerContainer>            
            {props.children}
        </ContainerContainer>
    )
}

export default Container;