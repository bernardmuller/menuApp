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
    CancelButton
} from 'common/components';

import {
    FontSizes
} from 'common';

import { useForm } from 'react-hook-form';

export const MealDirections = props => {
    const [edit, setEdit] = useState(false);
    const [hover, setHover] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <Container>

            <IngredientsContainer>

                <H3
                    color="white"
                >
                    Ingredients
                </H3>

                <ul>
                    {/* {props.meal.ingredients.map((item)=> (
                        <li>
                            {item}
                        </li>
                    ))} */}
                </ul>

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

const Container = styled.div`
    width: 100%;
    padding: 2rem 0;
    display:flex;
`

const DirectionContainer = styled.div`
    width: 100%;
    display: grid;
`

const IngredientsContainer = styled.div`
    width: 100%;
    padding: 0 0 0 2.5rem;
    display: grid;
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