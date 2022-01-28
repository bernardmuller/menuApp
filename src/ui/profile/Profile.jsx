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

import {
    UserInfo,
    Favourites,
    EditProfile
} from './components'

export const Profile = () => {
    
    const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        activeContext.dispatch({ type: "PROFILE" });
    }, [])

    return (
        <PrivateContainer>

            <LeftWrapper>
                <UserInfo />

                <Favourites />
            </LeftWrapper>

            <RightWrapper>
                
            </RightWrapper>
        </PrivateContainer>
    )
};


const LeftWrapper = styled.div`
    
    width: 30%;
    background-color: ${colors.white};
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`
const RightWrapper = styled.div`
    height: 100%;
    width: auto;
`

