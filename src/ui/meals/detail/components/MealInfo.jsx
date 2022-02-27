import React, {
    useState
} from 'react';
import styled from 'styled-components'

import {
    H2,
    Button,
    Text,
    SaveButton,
    EditButton,
    CancelButton,
    Input
} from 'common/components';

import { 
    FontSizes,
    colors
} from 'common';

import { IoAlertCircleOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

import { useForm } from 'react-hook-form';

import { 
    updateMeal,
} from 'actions';

const Name = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [edit, setEdit] = useState(false);
    const [hover, setHover] = useState(false);
    const [name, setName] = useState(props.data.name)

    const handleUpdateName = async(data) => {
        await updateMeal(props.data._id, data)
        .then(async() => {
            setEdit(false)
            props.onReload();
        })
        .catch(err => console.log(err));
    };

    const onSubmit = (data) => {
        handleUpdateName(data);
    };

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
                        {name}
                    </H2>
                    {hover && !edit && 
                        <EditButton 
                            onClick={() => setEdit(true)}
                        />
                    }
                </>
            ) : (
                <NameForm
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input 
                        placeholder="Meal name"
                        height="2.5rem"
                        value={name}
                        {...register("name", {
                            onChange: e => {setName(e.target.value)}
                        })}
                    />
                    <SaveButton />
                    <CancelButton 
                        onClick={() => setEdit(false)}
                    />
                </NameForm>
            )}
            
        </Wrapper>
    )
};

export const MealInfo = props => {
    return (
        <Container>

            <InfoContainer>
                <Header>
                    <Name 
                        data={props.meal}
                        onReload={() => {
                            props.onReload();
                        }}
                    />
                </Header>

                <ButtonsContainer>
                    <Button
                        primary
                        width="180px"
                        height="3rem"
                    >
                        Add
                    </Button>

                    <Button
                        primary
                        width="3rem"
                        height="3rem"
                    >
                        <IoAlertCircleOutline
                            size={30} 
                        />
                    </Button>
                </ButtonsContainer>

                <Tags
                    season={props.meal.season}
                />

                <Text 
                    color="#ABBBC2" 
                    fontSize={FontSizes.Small}
                >
                    Times eaten: 3
                </Text>

                <MealStats 
                    meal={props.meal}
                />

            </InfoContainer>

            <MealImageContainer>
                <img src={props.meal.image} alt="Meal Image" />
            </MealImageContainer>

        </Container>
    )
};

const Tags = props => {
    return (
        <TagsContainer>
            <TagWrapper>
                <Text 
                    color="#B4D5AB"
                    fontSize={FontSizes.Small}
                >
                    {props.season}
                </Text>
            </TagWrapper>
        </TagsContainer>
    )
}

const MealStats = props => {
    const ingredients = props.meal.ingredients;
    return (
        <StatsContainer>
            <Stat>
                <Text
                    color="white"
                    fontSize={FontSizes.Bigger}
                >
                    {props.meal && props.meal.ingredients.length} 
                </Text>
                <Text
                    color="#ABBBC2"
                    fontSize={FontSizes.Small}
                >
                    Ingredients
                </Text>
            </Stat>
            <Stat
                borders
            >
                <Text
                    color="white"
                    fontSize={FontSizes.Bigger}
                >
                    20
                </Text>
                <Text
                    color="#ABBBC2"
                    fontSize={FontSizes.Small}
                >
                    Prep time
                </Text>
            </Stat>
            <Stat>
                <Text
                    color="white"
                    fontSize={FontSizes.Bigger}
                >
                    40
                </Text>
                <Text
                    color="#ABBBC2"
                    fontSize={FontSizes.Small}
                >
                    Serve in
                </Text>
            </Stat>
        </StatsContainer>
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

const StatsContainer = styled.div`
    height: 6rem;
    width: 100%;
    display: flex;
`

const Stat = styled.div`
    flex: 0.333;
    border-left: ${props => props.borders ? '1px solid grey' : ''};
    border-right: ${props => props.borders ? '1px solid grey' : ''};
    display: grid;
    text-align: center;
    padding: 1rem;
`


const Container = styled.div`
    width: 100%;
    display: flex;

`

const MealImageContainer = styled.div`
    width: 50%;
    height: 20rem;
    overflow: hidden;
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const InfoContainer = styled.div`
    padding: 0 1.5rem 0 0;
    width: 50%;
    display: grid;
    align-items: space-between;
    gap:0.7rem;
`

const Header = styled.div`
    width: 100%;
    display: flex;
`

const ButtonsContainer = styled.div`
    display:flex;
    width: 100%;
    gap: 1rem;

`

const TagsContainer = styled.div`
    display:flex;
    width: 100%;
    gap: 1rem;
` 
const TagWrapper = styled.div`
    height: 2rem;
    width: 80px;
    border-radius: 1rem;
    background-color: rgb(104, 191, 80, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
` 