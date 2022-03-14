import React, { 
    useState, 
    useEffect 
} from 'react';

import styled from 'styled-components';

import { 
    ActiveViewContext 
} from "contexts/ActiveViewContext";

import { IoCloudUploadSharp } from "react-icons/io5";

import pp from 'assets/images/user.png'

import { 
    PrivateContainer,
    colors,
    Images,
    FontSizes,
    DeviceMediaQueries
} from 'common';

import {
    H2,
    Text,
    H3,
    Loader,
    SaveButton,
    Closebutton
} from 'common/components'

export const UserInfo = props => {
    // const [meals, setMeals] = useState(props.user.meals);
    const [editURL, setEditURL] = useState(false);
    const [user, setUser] = useState({
        menus : [],
        meals: [],
        firstname: "",
        lastname: "",
        email: ""
    });

    useEffect(()=> {
        setUser({
            menus: props.user.menus,
            meals: props.user.meals,
            firstname: props.user.firstname,
            lastname: props.user.lastname,
            image: props.user.image,
            email: props.user.email
        })
    }, [props.loading])
    console.log(props.user)
    return (
        <Container>
                {!props.loading && user.image ? (
                    <ImageContainer>
                        <img src={user.image} alt="profile picture" />
                    </ImageContainer>
                ) : (
                    <Placeholder>
                        <img src={pp} alt="user image" />
                    </Placeholder>
                )}
            <H2
                fontSize={FontSizes.Bigger}
                textAlign="center"
                margin="1rem 0 0 0"
            >
                {!props.loading ? user.firstname && user.lastname && `${props.user.firstname || ""} ${props.user.lastname || ""}` : <Loader spinnerColor={colors.grey_light} size="18px" />}
            </H2>

            <Text
                fontSize={FontSizes.Smaller}
                color={colors.grey}
                margin="0 0 1rem 0"
            >
                {!props.loading && user.email}
            </Text>

            
            <StatsContainer>
                <Stat>
                    <Text
                        color={colors.black}
                        fontSize={FontSizes.Big}
                    >
                        {!props.loading ? user.menus && user.menus.length : <Loader spinnerColor={colors.grey_light} size="18px" />}
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
                        fontSize={FontSizes.Big}
                    >
                        {!props.loading ? user.meals && user.meals.length : <Loader spinnerColor={colors.grey_light} size="18px" />}
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
                        fontSize={FontSizes.Big}
                    >
                        N/A
                    </Text>
                    <Text
                        color={colors.grey}
                        fontSize={FontSizes.Smaller}
                    >
                        Favourites
                    </Text>
                </Stat>
            </StatsContainer>

        </Container>
    );
};
const URLBackdrop = styled.button`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: blue;
    z-index: 800;
`

const URLContainer = styled.div`
    width: 200px;
    height: 100%;
    position: absolute;
    left: 0;
    border-radius: 1rem;
    background-color: ${colors.primary};
    display: flex;

    button {
        background: none;
        border: none;
    }
`

const ImageContainer = styled.div`
    height: 150px;
    width: 150px;
    overflow: hidden;
    position: relative;
    background-color: ${colors.grey};
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`

const Upload = styled.div`
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

const UploadButton = styled.button`
    background: none;
    border: none;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    /* @media ${DeviceMediaQueries.laptop} {
        flex-direction: row;
    } */
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

const Placeholder = styled.div`
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.grey};
    border-radius: 50%;
    
    img {
        padding: 10%;
        width: 80%;
        height: 80%;
        object-fit: cover;
    }
`