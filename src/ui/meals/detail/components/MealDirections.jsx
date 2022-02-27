import React, {
    useState,
    useEffect
} from 'react';

import "react-widgets/styles.css";

import styled from 'styled-components';

import DropdownList from "react-widgets/DropdownList";

import {
    H3,
    Text,
    TextArea,
    EditButton,
    SaveButton,
    CancelButton,
    Input,
    Button,
    Loader
} from 'common/components';

import {
    FontSizes,
    colors
} from 'common';

import { useForm } from 'react-hook-form';

import { 
    updateIngredient,
    getMeal,
    removeIngredient,
    updateMeal,
    getIngredients,
    addIngredient
} from 'actions';

const Item = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [edit, setEdit] = useState(false);
    const [hover, setHover] = useState(false);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(props.data.name)

    const onSubmit = async(data) => {
        setEdit(false)
        setLoading(true);
        await updateIngredient(props.data._id, data)
        .then(async() => {
            await props.onReload()

            setLoading(false);
        })
        .catch(err => console.log(err))
    }

    

    if(edit) {
        return (
            <ItemContainerForm
                onSubmit={handleSubmit(onSubmit)}
            >   
                <Input 
                    value={value}
                    height="2rem"
                    {...register("name")}
                    onChange={e => setValue(e.target.value)}
                />  
                <UtilityWrapper>
                    <SaveButton 
                        // onClick={() => {}}
                    />

                    <CancelButton 
                        onClick={() => setEdit(false)}
                    />
                </UtilityWrapper>
            </ItemContainerForm>
        )
    };

    return (
        <ItemContainer
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >   
            {loading ? (
                <Loader 
                    spinnerColor={colors.white}
                />
            ) : (
                <Text
                    fontSize={FontSizes.Regular}
                    color={colors.grey}
                >
                    {props.data.name}
                </Text>
            )}
            

            {hover && !edit && 
                <UtilityWrapper>
                    <EditButton 
                        onClick={() => {
                            setEdit(true)
                        }}
                    />
                    <CancelButton 
                        color={colors.danger}
                        onClick={() => props.onDelete(props.data._id)}
                    />
                </UtilityWrapper>
            }
        </ItemContainer>
    )
};

export const MealDirections = props => {
    const [edit, setEdit] = useState(false);
    const [hover, setHover] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [meal, setMeal] = useState(props.meal)
    const [ingredients, setIngredients] = useState(null)
    const [loading, setLoading] = useState(false);
    const [directions, setDirections] = useState(props.meal.directions)

    const fetchIngredients = async() => {
        await getMeal(props.meal._id)
        .then(data => setIngredients(data.ingredients))
        .catch(err => console.log(err))
    };

    const handleDeleteIngredient = async(id) => {
        await removeIngredient(props.meal._id, id)
        .then(async() => {
            fetchIngredients()
        })
        .catch(err => console.log(err))
    }

    const handleUpdateDirections = async(data) => {
        await updateMeal(props.meal._id, data)
        .then(async() => {
            props.onReload()
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchIngredients()
    }, [])

    const onDirectionsSubmit = data => {
        handleUpdateDirections(data)
    };

    return (
        <Container>

            <SubContainer>
                <Header>
                    <H3
                        color="white"
                    >
                        Ingredients
                    </H3>
                </Header>
                {loading ? (
                    <Loader 
                        spinnerColor={colors.white}
                    />
                ) : (
                    <Items>
                        {ingredients && ingredients.map((item, index)=> (
                            <Item 
                                data={item}
                                onDelete={(id) => handleDeleteIngredient(id)}
                                onReload={() => fetchIngredients()}
                            />
                        ))}

                        <AddItem 
                            meal={props.meal}
                            onReload={() => fetchIngredients()}
                        />

                    </Items>
                )}
                

            </SubContainer>

            <SubContainer>
                {!edit ? (
                    <>
                        <Header
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <H3
                                color="white"
                            >
                                Directions
                            </H3>

                            {hover && !edit && 
                                    <EditButton 
                                        onClick={() => {
                                            setEdit(true)
                                        }}
                                    />
                                
                            }

                        </Header>
                        <Text
                            color="#ABBBC2"
                            fontSize={FontSizes.Small}
                        >
                            {directions}
                        </Text>
                    </>
                ) : (

                    <DirectionsForm
                        onSubmit={handleSubmit(onDirectionsSubmit)}
                    >
                        <Header
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <H3
                                color="white"
                            >
                                Directions
                            </H3>

                            {edit && 
                                <UtilityWrapper>
                                    <SaveButton 
                                        onClick={() => handleSubmit(onDirectionsSubmit)}
                                    />

                                    <CancelButton 
                                        onClick={() => setEdit(false)}
                                    />
                                </UtilityWrapper>

                            }

                        </Header>
                        <TextArea 
                            value={directions}
                            {...register("directions", {
                                onChange: e => {setDirections(e.target.value)}
                            })}
                        />
                    </DirectionsForm>
                )}
            </SubContainer>

            

        </Container>
    )
};

const AddItem = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [add, setAdd] = useState(false);
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    const fetchIngredients = async() => {
        const ingredients = await getIngredients()
        setIngredients(ingredients)
    };

    useEffect(() => {
        fetchIngredients()
    }, [])

    const onAddIngredient = async(e) => {
        e.preventDefault();
        await addIngredient(props.meal._id, selectedIngredient._id)
        .then(res => {
            setSelectedIngredient(null);
            props.onReload()
        })
        .catch(err => console.log(err))
    }

    return (
        <Wrapper>
            {!add ? (
                <Button
                    inline
                    onClick={() => setAdd(true)}
                >
                    <Text
                        fontSize={FontSizes.Small}
                        color={colors.grey_dark}
                    >
                        + Add Ingredient
                    </Text>
                </Button>
            ):(
                <Form
                    onSubmit={onAddIngredient}
                >

                    <DropdownList
                        // defaultValue="Yellow"
                        placeholder="Search for ingredient"
                        data={ingredients}
                        dataKey='id'
                        textField='name'
                        onChange={(val) => setSelectedIngredient(val)}
                        busy={loading}
                    />
                    <UtilityWrapper>
                        <SaveButton  />

                        <CancelButton 
                            onClick={() => setAdd(false)}
                        />
                    </UtilityWrapper>
                </Form>
            )}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 0 0 0.5rem 0;

    &:hover {
        background-color: ${colors.secondary_dark};
    }
`

const Form = styled.form`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
` 

const Container = styled.div`
    width: 100%;
    padding: 2rem 0;
    display:flex;
    gap: 2rem;
`

const SubContainer = styled.div`
    width: 100%;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const UtilityWrapper = styled.div`
    display: flex;
    align-items:center;
`

const DirectionsForm = styled.form`
    width: 100%;
`

const Items = styled.div`
    width: 100%;
    
`

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    padding: 0 0 0 1rem;

    &:hover {
        background-color: ${colors.secondary_dark};
    }
`

const ItemContainerForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    padding: 0 0 0 1rem;

    &:hover {
        background-color: ${colors.secondary_dark};
    }
`