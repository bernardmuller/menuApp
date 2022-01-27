import React, { 
    useContext, 
    useEffect 
} from 'react';

import styled from 'styled-components';

import { 
    ActiveViewContext 
} from "contexts/ActiveViewContext";

import { 
    PrivateContainer,
    colors
} from 'common';

export const Profile = () => {
    
    const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        activeContext.dispatch({ type: "PROFILE" });
    }, [])

    return (
        <PrivateContainer>
            <LeftWrapper>
                <h1
                    style={{color: "black"}}
                >Profile Left</h1>
            </LeftWrapper>
            <RightWrapper>
                <h1
                    style={{color: "white"}}
                >Profile Right</h1>
            </RightWrapper>
        </PrivateContainer>
    )
};


const LeftWrapper = styled.div`
    height: 100%;
    width: 30%;
    background-color: ${colors.white};
`
const RightWrapper = styled.div`
    height: 100%;
    width: auto;
`

