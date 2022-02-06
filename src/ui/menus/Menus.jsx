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
    Text,
    Input,
    SaveButton, 
    EditButton,
    CancelButton
} from 'common/components';

import { MealCard } from 'common/components/card/MealCard';

import mealimg from 'assets/images/meal.png';
import { 
    MenuGroup,
    GroceryList,
    AddMealsTab
} from './components';

const Name = props => {
    const [edit, setEdit] = useState(false);
    const [hover, setHover] = useState(false);
    return (
        <Wrapper
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {!edit ? (
                <>
                    <H2
                        color={colors.white}
                        fontSize={FontSizes.Big}
                        margin="0"
                    >
                        Menu Name
                    </H2>
                    {hover && !edit && 
                        <EditButton 
                            onClick={() => setEdit(true)}
                        />
                    }
                </>
            ) : (
                <NameForm>
                    <Input 
                        placeholder="Menu name"
                        height="2.5rem"
                    />
                    <SaveButton 
                        onClick={() => {}}
                    />
                    <CancelButton 
                        onClick={() => setEdit(false)}
                    />
                </NameForm>
            )}
            
        </Wrapper>
    )
}

const Period = props => {
    const [edit, setEdit] = useState(false);
    const [hover, setHover] = useState(false);
    return (
        <Wrapper
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            height="2rem"
        >
            {!edit ? (
                <>
                    <Text
                        color={colors.grey_dark}
                    >
                        Menu period / Date
                    </Text>

                    {hover && !edit && 
                        <EditButton 
                            onClick={() => setEdit(true)}
                        />
                    }
                </>
            ) : (
                <NameForm>
                    <Input  
                        type="date"
                        height="2.5rem"
                    />
                    <Text
                        color={colors.grey_light}
                        margin="0 0.5rem 0 0.5rem"
                    >
                        to
                    </Text>
                    <Input  
                        type="date"
                        height="2.5rem"
                    />
                    <SaveButton 
                        onClick={() => {}}
                    />
                    <CancelButton 
                        onClick={() => setEdit(false)}
                    />
                </NameForm>
            )}
            
        </Wrapper>
    )
}


const MenusTab = props => {
    const meals = props.meals;
    
    return (
            <>  
                
                <Name />

                <Period />

                <H4
                    color={colors.grey_dark}
                    fontSize={FontSizes.Regular}
                    margin="0"
                >
                    created by
                </H4>

                <WeekContainer>
                    <Header>
                        <Text
                            fontSize={FontSizes.Big}
                            color={colors.grey_light}
                        >
                            Meals
                        </Text>
                        <Button
                            primary
                            onClick={() => props.onEditMeals()}
                            width="120px"
                        >
                            Edit
                        </Button>
                    </Header>

                    <MealsContainer>
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
                    </MealsContainer>
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
                        onEditMeals={() => {
                            setShowMenusTab(false);
                            setShowAddMealsTab(true);
                        }}
                    />
                }

                

            </RightWrapper>
        </PrivateContainer>
    )
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: ${props => props.height || "3rem"};
`

const NameForm = styled.form`
    display: flex;
    align-items: center;
`

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
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    background-color: ${colors.secondary_light};
    padding: 1rem;
    border-radius: 8px;
`

const MealsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    margin-top: 2rem;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`
