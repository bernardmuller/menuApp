import React, { 
    useContext, 
    useEffect 
} from 'react';

import styled from 'styled-components';

import { 
    ActiveViewContext 
} from "contexts/ActiveViewContext";

import { IoCloudUploadSharp } from "react-icons/io5";

import pp from 'assets/images/profile.jpg'

import { 
    PrivateContainer,
    colors,
    Images,
    FontSizes
} from 'common';

import {
    H2,
    Text,
    H3,
} from 'common/components'

export const UserInfo = () => {
    return (
        <Container>
            <ImageContainer>
                <img src={pp} alt="profile picture" />
                <Upload>
                    <IoCloudUploadSharp size={20} />
                </Upload>
            </ImageContainer>

            <H2
                fontSize={FontSizes.Big}
                textAlign="center"
            >
                John Smith
            </H2>

            
            <StatsContainer>
                <Stat>
                    <Text
                        color={colors.black}
                        fontSize={FontSizes.Bigger}
                    >
                        6
                    </Text>
                    <Text
                        color={colors.grey}
                        fontSize={FontSizes.Smaller}
                    >
                        Menus
                    </Text>
                </Stat>
                <Stat
                    borders
                >
                    <Text
                        color={colors.black}
                        fontSize={FontSizes.Bigger}
                    >
                        25
                    </Text>
                    <Text
                        color={colors.grey}
                        fontSize={FontSizes.Smaller}
                    >
                        Meals
                    </Text>
                </Stat>
                <Stat>
                    <Text
                        color={colors.black}
                        fontSize={FontSizes.Bigger}
                    >
                        4
                    </Text>
                    <Text
                        color={colors.grey}
                        fontSize={FontSizes.Smaller}
                    >
                        Favourite
                    </Text>
                </Stat>
            </StatsContainer>

        </Container>
    );
};

const ImageContainer = styled.div`
    height: 150px;
    width: 150px;
    overflow: hidden;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`

const Upload = styled.button`
    height: 1.8rem;
    width: 1.8rem;
    border: none;
    outline: none;
    background-color: ${colors.primary};
    border-radius: 50%;
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    box-shadow: 0 0 0 4px ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1.5rem 1rem;
`

const StatsContainer = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
`

const Stat = styled.div`
    flex: 0.333;
    border-left: ${props => props.borders ? '1px solid grey' : ''};
    border-right: ${props => props.borders ? '1px solid grey' : ''};
    display: grid;
    text-align: center;
    padding: 0.5rem;
`