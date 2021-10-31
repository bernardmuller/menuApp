import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    position: relative;
`

const Content = styled.div`
    display:flex;
    flex-direction: column; 
    width: 100%;
    height: 100%;
    position: relative;
`

const ContentCenter = styled.div`
    display:flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`

export const PageContainer = (props) => {
    return (
        <Page>            
            {props.children}
        </Page>
    )
};

export const ContentContainer = (props) => {
    return (
        <Content>            
            {props.children}
        </Content>
    )
}

export const ContentCenterContainer = (props) => {
    return (
        <ContentCenter>            
            {props.children}
        </ContentCenter>
    )
}

