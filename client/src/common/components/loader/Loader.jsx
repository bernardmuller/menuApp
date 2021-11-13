import
  React
from 'react';

import
  styled, {
  keyframes,
} from 'styled-components/macro';

import {
  colors,
  FontSizes,
} from 'common';

const Animation = size => keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  position: relative;
  margin: ${props => props.margin};
`;

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    :after {
        content: " ";
        display: block;
        width: 20px;
        height: 20px;
        margin: 8px;
        border-radius: 50%;
        border: 3px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: ${Animation} 1.2s linear infinite;
    }
`;

const Label = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: ${FontSizes.Regular};
  font-weight: bold;
`;

export const Loader = props => (

  <Container
    margin={props.showLabel ? '0 0 30px 0' : '0'}>

    <LoadingContainer
      backgroundColor={props.backgroundColor || colors.White}
      spinnerColor={props.spinnerColor || colors.grey}
      size={props.size || 70}
    />

    

  </Container>
  
);