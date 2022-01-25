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

import {
  Text
} from 'common/components';

const Animation = size => keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: ${props => props.margin};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    :after {
        content: " ";
        display: block;
        width: ${props => props.size};
        height: ${props => props.size};
        margin: 8px;
        border-radius: 50%;
        border: 3px solid ${props => props.spinnerColor};
        border-color: ${props => props.spinnerColor} transparent ${props => props.spinnerColor} transparent;
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
      size={props.size || '20px'}
    />

    <Text
      color={props.color}
    >
      {props.label}
    </Text>

  </Container>
  
);