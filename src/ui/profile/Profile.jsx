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
    colors,
    DeviceMediaQueries
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
            <Container>

                <LeftWrapper>
                    <UserInfo />
                    <Favourites />
                </LeftWrapper>

                <RightWrapper>
                    <EditProfile />
                </RightWrapper>

            </Container>
        </PrivateContainer>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media ${DeviceMediaQueries.laptop} {
        flex-direction: column;
    }
`

const LeftWrapper = styled.div`
    
    width: 30%;
    background-color: ${colors.white};
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media ${DeviceMediaQueries.laptop} {
        width: 100%;
    }
`
const RightWrapper = styled.div`
    width: auto;
    padding: 1.5rem 5%; 
    flex-grow: 1;
    background-color: ${colors.secondary};
`

