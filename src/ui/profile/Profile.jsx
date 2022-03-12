import React, { 
    useState,
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
    Loader,
} from 'common/components';

import {
    UserInfo,
    Favourites,
    EditProfile
} from './components'

import {
    DataStore
} from 'common/dataStore'

import {
    getUser,
    updateUser
} from 'actions'

export const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({})
    const activeContext = useContext(ActiveViewContext);

    const userId = DataStore.get("LOGGED_IN_USER").user

    const fetchUser = async() => {
        setLoading(true)
        await getUser(userId)
        .then(data => setUser(data))
        .catch(err => console.log(err))
        setLoading(false)
    };

    const handleUpdate = async(data) => {
        setLoading(true);
        await updateUser(user._id, data)
        .catch(err => console.log(err))
        .finally(() => fetchUser())
    };
    
    useEffect(() => {
        fetchUser()
        activeContext.dispatch({ type: "PROFILE" });
    }, [])

    return (
        <PrivateContainer>
            <Container>

                <LeftWrapper>
                    {/* {!loading ? ( */}
                        <>
                            <UserInfo 
                                user={user}
                                loading={loading}
                            />
                            <Favourites 
                                user={user}
                                
                            />
                        </>
                    {/* ) : (
                        <Loader 
                            spinnerColor={colors.secondary}
                            size="24px"
                        />
                    )} */}
                </LeftWrapper>

                <RightWrapper>
                    {/* {!loading ? ( */}
                        <EditProfile 
                            user={user}
                            onUpdate={handleUpdate}
                            loading={loading}
                        />
                    {/* ) : (
                        <Loader
                            spinnerColor={colors.grey_light}
                            size="24px"
                        />
                    )} */}
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
    min-width: 400px;
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

