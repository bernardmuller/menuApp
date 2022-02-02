/* eslint-disable jsx-a11y/alt-text */
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
    MealsCollectionHeading,
    Button 
} from 'common/components';

import { MenuGroup } from './components';

export const Menus = () => {  

    const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        activeContext.dispatch({ type: "MENUS" });
    }, [])

    const menuGroups = ["1", "2", "3"]

    return (
        <PrivateContainer>
            <LeftWrapper>
                <Container>
                    <MealsCollectionHeading 
                        onSearch={(text) => {}}
                        onFilter={(filter) => {}}
                        // count={meals.length}
                        heading="Menus"
                        searchPlaceholder="Search Menus"
                    />

                    {menuGroups.map((item, index) => (
                        <MenuGroup />
                    ))}

                </Container>

                <Button
                    primary
                    width="100%"
                    margin="1rem 0 0 0"
                    height="3rem"
                    onClick={() => {}}
                >
                    New Menu
                </Button>

            </LeftWrapper>
            <RightWrapper>
                <h1
                    style={{color: "white"}}
                >Menus Right</h1>
            </RightWrapper>
        </PrivateContainer>
    )
};

const LeftWrapper = styled.div`
    height: 100%;
    width: 30%;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.2rem;
`
const RightWrapper = styled.div`
    height: 100%;
    width: auto;
`

const Container = styled.div`
    display: Flex;
    flex-direction: column;
    top: 0;
    width: 100%;
    background-color: ${colors.white};
    overflow-y: scroll;
    position: relative;
    height: 100%;
`
