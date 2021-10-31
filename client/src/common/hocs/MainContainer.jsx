import React from 'react';
import styled from 'styled-components';

import {
    Nav,
    PageContainer,
    ContentContainer,
} from 'common/components'

const Page = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

export const PrivateContainer = (props) => {
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
        <React.Fragment>
            <PageContainer>
                {props.children}
            </PageContainer>
        </React.Fragment>
    )
};

