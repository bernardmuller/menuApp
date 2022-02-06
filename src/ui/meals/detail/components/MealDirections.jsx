import React, {
    useState
} from 'react';

import styled from 'styled-components';

import {
    H3,
    Text,
    TextArea,
    EditButton,
    SaveButton,
    CancelButton,
    Input,
    Button
} from 'common/components';

import {
    FontSizes,
    colors
} from 'common';

import { useForm } from 'react-hook-form';

const Item = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [edit, setEdit] = useState(false);
    const [hover, setHover] = useState(false);

    const onSubmit = data => {

    }

    if(edit) {
        return (
            <ItemContainerForm
                onSubmit={handleSubmit(onSubmit)}
            >   
                <Input 
                    value={props.data}
                    height="2rem"
                />  
                <UtilityWrapper>
                    <SaveButton 
                        onClick={() => {}}
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
            <Text
                fontSize={FontSizes.Regular}
                color={colors.grey}
            >
                {props.data}
            </Text>

            {hover && !edit && 
                <UtilityWrapper>
                    <EditButton 
                        onClick={() => {
                            setEdit(true)
                        }}
                    />
                    <CancelButton 
                        color={colors.danger}
                        onClick={() => {}}
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

    const items = ["item", "item", "item", "item", "item"]

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <Container>

            <IngredientsContainer>
                <Header>
                    <H3
                        color="white"
                    >
                        Ingredients
                    </H3>
                </Header>

                <Items>
                    {items.map((item, index)=> (
                        <Item 
                            data={item}
                        />
                    ))}

                    <AddItem />

                </Items>

            </IngredientsContainer>

            <DirectionContainer>
                    
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

                    {edit && 
                        <UtilityWrapper>
                            <SaveButton 
                                onClick={() => {}}
                            />

                            <CancelButton 
                                onClick={() => setEdit(false)}
                            />
                        </UtilityWrapper>

                    }

                </Header>

                {!edit ? (
                    <Text
                        color="#ABBBC2"
                        fontSize={FontSizes.Small}
                    >
                        {props.meal.directions}
                    </Text>
                ) : (
                    <DirectionsForm
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextArea 
                            value={props.meal.directions}
                            {...register("directions")}
                        />
                    </DirectionsForm>
                )}
            </DirectionContainer>

            

        </Container>
    )
};

const AddItem = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [add, setAdd] = useState(false);

    const onSubmit = data => {
        console.log(data)
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
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input 
                        height="2rem"
                        width="20rem"
                        placeholder="Ingredient Name"
                    />
                    <UtilityWrapper>
                        <SaveButton 
                            onClick={() => {}}
                        />

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
`

const DirectionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const IngredientsContainer = styled.div`
    width: 100%;
    display: grid;
    padding:0 1rem 0 0;
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