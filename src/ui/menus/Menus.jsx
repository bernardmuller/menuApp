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
    colors,
    FontSizes
} from 'common';

import { 
    MealsCollectionHeading,
    Button,
    H2,
    H4,
    Text
} from 'common/components';

import { MenuGroup } from './components';
import { MealCard } from 'common/components/card/MealCard';

import mealimg from 'assets/images/meal.png';
import { GroceryList } from './components/GroceryList';


export const Menus = () => {  

    const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        activeContext.dispatch({ type: "MENUS" });
    }, [])

    const menuGroups = ["1", "2", "3"];
    const meals = ["1", "2", "3", "1", "2", "3"];

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

                <H2
                    color={colors.white}
                    fontSize={FontSizes.Big}
                    margin="0"
                >
                    Menu Name
                </H2>

                <Text
                    color={colors.grey_dark}
                >
                    Menu period / Date
                </Text>

                <H4
                    color={colors.grey_dark}
                    fontSize={FontSizes.Regular}
                    margin="0"
                >
                    created by
                </H4>

                <WeekContainer>
                    {meals.map((meal, index) => (
                        <MealCard 
                            img={meal.image || mealimg} 
                            name={"Meal name"}
                            season={"Season"}
                            count={2}
                            key={index}
                            secondary
                            onClick={() => {
                                
                            }}
                        />
                    ))}
                </WeekContainer>

                <GroceryList />

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
    flex-grow: 1;
    padding: 2rem 4rem;
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

const WeekContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
`