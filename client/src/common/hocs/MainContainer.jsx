import React from 'react';
import styled from 'styled-components';

import {
    Nav,
    PageContainer,
    ContentContainer,
    H1,

} from 'common/components'

import {
    FontSizes,
    colors
} from 'common';

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
    return (
        <PageContainer>
            <Nav />
            <TopBar>
                <H1
                    color={colors.light.grey}
                    fontSize={FontSizes.Smaller}
                >
                    MUNCHIE MANAGER
                </H1>
            </TopBar>
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

