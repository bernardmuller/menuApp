import React from 'react';
import styled from 'styled-components';

import {
    FontSizes,
    colors,
    Images,
} from 'common';


export const Input = styled.input`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "3rem"};
    border: ${props => props.error ? `1px solid red` : `1px solid ${colors.grey_light}`};
    border-radius: 6px;
    font-size: ${FontSizes.Small};
    padding: ${props => props.padding || "0 0 0 1rem"};
    margin: ${props => props.margin || "0"};
    font-family: ${props => props.fontFamily || "Arial"};

    &:-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`

const TextContainer = styled.div`
    display: flex;
    height: 1rem;
    background-color: blue;

    img {
        height: 20px;
    };
`

const Container = styled.div`
    width: 100%;
`

// export const Input = (props) => {

//     const onChange = (e) => {
//         if(props.onChange) {
//             props.onChange(e.target.value)
//         }
//     }

//     return (

//         <>

//             <ImputContainer
//                 type={props.type}
//                 placeholder={props.placeholder || "no placeholder provided"}
//                 margin={props.margin}
//                 width={props.width}
//                 error={props.error}
//                 height={props.height}
//                 padding={props.padding}
//                 min={props.min}
//                 max={props.max}
//                 maxLength={props.maxLength}
//                 pattern={props.pattern}
//                 onChange={onChange}
//                 value={props.value}
//                 fontFamily={props.fontFamily}
//             />

//             {/* {props.errorMessage &&

//                 <TextContainer>
//                     <Text
//                         color="red"
//                         fontSize={FontSizes.Smaller}
//                     >
//                         <img 
//                             src={Images.Icons.Error} alt="" 
//                         />

//                         {props.errorMessage}

//                     </Text>
//                 </TextContainer>

//             } */}

//         </>

//     )
// };

