import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

import {
    Nav,
    PageContainer,
    ContentContainer,
    H1,

} from 'common/components'

import {
    FontSizes,
    colors,
    auth
} from 'common';

import {
    Routes
} from 'navigation';

import {
    DataStore
} from 'common/dataStore';

const Page = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const TopBar = styled.div`
    width: 100%;
    height: 2rem;
    background-color: ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index:2;
    padding: 0 5%;
`

export const PrivateContainer = (props) => {
    const history = useHistory()
    
    useEffect(() => {
        const auth = async() => {
            const user = DataStore.get("LOGGED_IN_USER")
            
            if(!user.token) {
              console.log("no token")
                history.push(Routes.login.path)
            }
        }
        
        auth()
    }, [])

    return (
        <PageContainer>
            <Nav />
            <ContentContainer>
                {props.children}
            </ContentContainer>
        </PageContainer>
    )
};

export const PublicContainer = (props) => {
    return (
        <PageContainer>

            {props.children}

        </PageContainer>
    )
};

