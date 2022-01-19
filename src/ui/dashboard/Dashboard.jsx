/* eslint-disable jsx-a11y/alt-text */
import React, { 
    useContext, 
    useEffect 
} from 'react';

import styled from 'styled-components';

import { 
    ActiveViewContext 
} from "contexts/ActiveViewContext";

// import { ThemeContext } from 'contexts/ThemeContext';
import { 
    PrivateContainer,
    colors
} from 'common';

export const Dashboard = () => {  

    const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        activeContext.dispatch({ type: "DASHBOARD" });
    }, [])

    return (
        <PrivateContainer>
            <LeftWrapper>
                <h1
                    style={{color: "white"}}
                >Dashboard Left</h1>
            </LeftWrapper>
            <RightWrapper>
                <h1
                    style={{color: "white"}}
                >Dashboard Right</h1>
            </RightWrapper>
        </PrivateContainer>
    )
};

const LeftWrapper = styled.div`
    height: 100%;
    width: 30%;
    background-color: ${colors.tertiary};
`
const RightWrapper = styled.div`
    height: 100%;
    width: auto;
`
