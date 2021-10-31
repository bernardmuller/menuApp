import
  React
from 'react';

import
  styled
from 'styled-components/macro';

import {
  colors,
  FontSizes,
} from 'common';

// import {
//   Loader,
// } from './Loader';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${props => props.fontSize || FontSizes.Small};
  height: ${props => props.height || '45px'};
  line-height: ${props => props.height || '45px'};
  border-radius: ${props => props.borderRadius || '22.5px'};
  border: ${props => props.border || `1px solid ${colors.black}`};
  width: ${props => props.width || '300px'};
  user-select: none;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 5px;

  ${props => props.margin && `margin: ${props.margin};`}

  background-color: ${props => !props.disabled
    ? props.backgroundColor || colors.white
    : colors.gray};

    color: ${props => !props.disabled
      ? props.activeColor || colors.gray
      : props.disabledColor || colors.gray};

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  :hover {
    background-color: ${props => !props.disabled
      ? props.hoverBackgroundColor || colors.Tan
      : colors.Gray5};

     ${props => props.hoverBorder && `border: ${props.hoverBorder}`};
  }
`;

export const Button = props => {

  // const onClick = (e) => {

  //   if (props.disabled || props.showLoading) {
  //     return;
  //   }

  //   typeof props.onClick === 'function' && props.onClick(props.onClickArgs || e);
  // };

  return (

    <Container
      activeColor={props.activeColor}
      disabledColor={props.disabledColor}
      backgroundColor={props.backgroundColor}
      hoverBackgroundColor={props.hoverBackgroundColor}
      flexDirection={props.flexDirection}
      height={props.height}
      width={props.width}
      fontSize={props.fontSize}
      borderRadius={props.borderRadius}
      border={props.border}
      hoverBorder={props.hoverBorder}
      margin={props.margin}
      // disabled={props.disabled || props.showLoading}
      onClick={props.onClick}>

        {/* { props.showLoading

          ? <Loader
              backgroundColor={colors.gray}
              spinnerColor={colors.white}
              size={35}
            />

          : props.text || props.children || ''
        } */}

        {props.children}

    </Container>
  );
};