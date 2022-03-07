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
    CancelButton,
    Loader
} from 'common/components';

import { MealCard } from 'common/components/card/MealCard';

import mealimg from 'assets/images/meal.png';
import { 
    MenuGroup,
    GroceryList,
    AddMealsTab
} from './components';

import { 
    getMenus,
    createMenu,
    getMenu,
    updateMenu,
    deleteMenu
} from 'actions';

import { useForm } from 'react-hook-form';
import { CloseButton } from 'react-bootstrap';
import { Confirmation } from 'ui/meals/detail/components/Confirmation';

const Name = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [edit, setEdit] = useState(false);
    const [hover, setHover] = useState(false);
    const [name, setName] = useState(props.name);


    const cancel =() => {
        setName(props.name);
        setEdit(false);
    }
    
    console.log(props.name)
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
                        {name || "menu name"}
                    </H2>
                    {hover && !edit && 
                        <EditButton 
                            onClick={() => setEdit(true)}
                        />
                    }
                </>
            ) : (
                <NameForm
                    onSubmit={handleSubmit(props.onRename)}
                >
                    <Input 
                        placeholder="Menu name"
                        height="2.5rem"
                        value={name}
                        {...register("name", {
                            
                            onChange: e => {setName(e.target.value)}
                        })}
                    />
                    <SaveButton />
                    <CancelButton 
                        onClick={cancel}
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
    const [loading, setLoading] = useState(true);
    const [menu, setMenu] = useState({});
    const [menuId, setMenuId] = useState(props.activeMenu)

    const fetchMenu = async() => {
        setLoading(true);
        await getMenu(menuId)
        .then(data => setMenu(data))
        .catch((err) => console.log(err))
        setLoading(false)
    };

    const handleRename = async(data) => {
        setLoading(true);
        await updateMenu(menuId, data)
        // .then(res => setMenu(res))
        .catch((err) => console.log(err))
        await fetchMenu()
        props.onReload()
        setLoading(false)
    };

    useEffect(() => {
        fetchMenu()
    }, [menuId])

    useEffect(() => {
        setMenuId(props.activeMenu)
    })
    
    return (
            <>  
                {!loading ? (
                    <>

                        <Name 
                            name={menu && menu.name}
                            onRename={handleRename}
                        />
        
                        <Period 
                            period={{}}
                        />
        
                        <H4
                            color={colors.grey_dark}
                            fontSize={FontSizes.Regular}
                            margin="0"
                        >
                            Creator: {menu && menu.createdBy.firstname || "username"}
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
                                    {menu && menu.meals.length > 0 ? "Edit" : "Add Meals"}
                                </Button>
                            </Header>
        
                            <MealsContainer>
                                {menu && menu.meals.map((meal, index) => (
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
                ):(
                    <Loader 
                        spinnerColor={colors.grey}
                        size="25px"
                    />
                )}
            </>
                
    )
}

const MenuButton = props => {
    const [menuHover, setMenuHover] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    return (
        <>
            {showConfirmation && 
                <Confirmation 
                    text={`Are you sure you want to delete "${props.menu.name}"?`}
                    onConfirm={() => {
                        props.onDelete();
                        setShowConfirmation(false)
                    }}
                    onCancel={() => setShowConfirmation(false)}
                />
            }
            <Wrapper
                onMouseEnter={() => setMenuHover(true)}
                onMouseLeave={() => setMenuHover(false)}
                height="2rem"
                style={{backgroundColor: menuHover && colors.white_dark}}
            >
                <Menu
                    onClick={() => props.onClick()}
                >   
                    {props.menu.name}
                </Menu>
                {menuHover &&
                    <CancelButton 
                        onClick={() => setShowConfirmation(true)}
                    />
                }
            </Wrapper>
        </>
    )
}


export const Menus = () => {  
    const [showMenusTab, setShowMenusTab] = useState(true);
    const [showAddMealsTab, setShowAddMealsTab] = useState(false);
    const [loading, setLoading] = useState(false);
    const [creating, setCreating] = useState(false);
    const activeContext = useContext(ActiveViewContext);
    const [menus, setMenus] = useState([]);
    const [activeMenu,setActiveMenu] = useState(null);

    const newMenu = async() => {
        setCreating(true)
        await createMenu()
        .catch(err => console.log(err))
        setCreating(false)
        fetchMenus()
    };
    
    const fetchMenus = async() => {
        setLoading(true)
        await getMenus()
        .then(data => setMenus(data))
        .catch(err => console.log(err))
        setLoading(false)
    };

    const removeMenu = async(id) => {
        setLoading(true)
        setActiveMenu(null)
        await deleteMenu(id)
        .catch(err => console.log(err))
        await fetchMenus()
        setLoading(false)
    };

    useEffect(() => {
        fetchMenus()
        activeContext.dispatch({ type: "MENUS" });
    }, []);

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
                        heading="My Menus"
                        searchPlaceholder="Search Menus"
                        loading={loading}
                    />

                    {menus.map((menu, index) => (
                        // <MenuGroup />
                        <MenuButton 
                            menu={menu}
                            key={index}
                            onClick={() => setActiveMenu(menu._id)}
                            onDelete={()=> removeMenu(menu._id)}
                        />
                    ))}

                </Container>

                <Button
                    disabled={creating}
                    primary
                    width="100%"
                    margin="1rem 0 0 0"
                    height="3.5rem"
                    onClick={() => newMenu()}
                >
                    {creating ? (
                        <Loader 
                            spinnerColor={colors.white}
                            size="25px"
                        />
                    ) : (
                        <Text
                            fontSize={FontSizes.Regular}
                            color={colors.white}
                        >
                            Create Menu
                        </Text>
                    )}
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

                {showMenusTab && activeMenu &&
                    <MenusTab 
                        onReload={fetchMenus}
                        activeMenu={activeMenu}
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

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
`

const NameForm = styled.form`
    display: flex;
    align-items: center;
`

const LeftWrapper = styled.div`
    height: 100%;
    width: 25%;
    min-width: 400px;
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
const Menu = styled.button`
    width: 100%;
    padding: 0.3rem;
    display: flex;
    background: none;
    border: none;

    
`
