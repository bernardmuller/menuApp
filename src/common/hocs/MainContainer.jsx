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
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            
            await fetch('http://localhost:4001/auth', {
                method: 'GET',
                mode: 'cors',
                redirect: 'follow',
                credentials: 'include',
                headers: headers,  
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.auth === false) {
                    history.push(Routes.login.path)
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }
        
        auth()
    }, [])

    return (
        <PageContainer>
            <Nav />
            {/* <TopBar>
                <H1
                    color={colors.light.grey}
                    fontSize={FontSizes.Smaller}
                >
                    MUNCHIE MANAGER
                </H1>
            </TopBar> */}
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

