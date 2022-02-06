/* eslint-disable jsx-a11y/alt-text */
import React, { 
    useContext, 
    useEffect,
    useState
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

import { MealCard } from 'common/components/card/MealCard';

import mealimg from 'assets/images/meal.png';
import { 
    MenuGroup,
    GroceryList,
    AddMealsTab
} from './components';


const MenusTab = props => {
    const meals = props.meals;
    return (
            <>
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

                    <AddMeal
                        onClick={() => props.onAddMeals()}
                    >
                        <Text
                            fontSize={FontSizes.Bigger}
                        >+</Text>
                        Add Meal
                    </AddMeal>
                    
                </WeekContainer>

                <GroceryList />
            </>
                
    )
}


export const Menus = () => {  
    const [showMenusTab, setShowMenusTab] = useState(true);
    const [showAddMealsTab, setShowAddMealsTab] = useState(false);

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

                {showAddMealsTab &&

                    <AddMealsTab 
                        onCancel={() => {
                            setShowMenusTab(true);
                            setShowAddMealsTab(false);
                        }}
                    />

                }

                {showMenusTab &&
                    <MenusTab 
                        meals={meals}
                        onAddMeals={() => {
                            setShowMenusTab(false);
                            setShowAddMealsTab(true);
                        }}
                    />
                }

                

            </RightWrapper>
        </PrivateContainer>
    )
};

const LeftWrapper = styled.div`
    height: 100%;
    width: 30%;
    min-width: 30%;
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
    overflow-y: scroll;
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    margin-top: 2rem;

`
const AddMeal = styled.button`
    width: 150px;
    height: 200px;
    padding: 1rem 1rem 2.5rem 1rem;
    border: 2px dashed ${colors.grey_dark};
    border-radius: 1rem;
    background: none;
    color:${colors.grey_dark};
    font-size: ${FontSizes.Small};
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`