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

import { IoAlertCircleOutline, IoFlaskOutline, IoTrashOutline} from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import DropdownList from "react-widgets/DropdownList";
import Multiselect from "react-widgets/Multiselect";

import { useForm } from 'react-hook-form';

import { 
    updateMeal,
    deleteMeal
} from 'actions';

import food from 'assets/images/food_ph.png';
import { Confirmation } from './Confirmation';

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
                        fontSize={FontSizes.Bigger}
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
    const [buttonHover, setButtonHover] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const removeMeal = async() => {
        setShowConfirmation(false)
        await deleteMeal(props.meal._id)
        .then(() => props.onHardReload())
    };

    return (
        <Container>

            {showConfirmation && 
                <Confirmation 
                    text="Are you sure you want to delete this meal?"
                    onConfirm={removeMeal}
                    onCancel={() => setShowConfirmation(false)}
                />
            }

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
                        onClick={() => setShowConfirmation(true)}
                    >
                        <IoTrashOutline
                            size={25} 
                        />
                    </Button>
                </ButtonsContainer>

                <Seasons
                    meal={props.meal}
                    id={props.meal._id}
                    onReload={() => {
                        props.onReload();
                    }}
                />

                <Text 
                    color="#ABBBC2" 
                    fontSize={FontSizes.Small}
                >
                    Creator: {props.meal.createdBy.firstname}
                </Text>

                <MealStats 
                    meal={props.meal}
                />

            </InfoContainer>

            <MealImageContainer>
                {props.meal.image ? (
                    <>  
                        <Image>
                            <img src={props.meal.image} />
                        </Image>
                    </>
                ) : (
                    <Placeholder
                        onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={() => setButtonHover(false)}
                    >
                        <img src={food} alt="meal" />  
                        {buttonHover &&
                            <UploadButton>Upload Image</UploadButton>
                        }
                    </Placeholder>
                )}
            </MealImageContainer>

        </Container>
    )
};

const Tags = props => {
    return (
        <TagsContainer>
            {props.tags ? (
                props.tags.map((tag, index) => (
                    <TagWrapper
                        key={index}
                    >
                        <Text 
                            color="#B4D5AB"
                            fontSize={FontSizes.Small}
                        >
                            {tag}
                        </Text>
                    </TagWrapper>
                ))
            ) : (
                // <TagWrapper>
                    <Button 
                        color="#B4D5AB"
                        fontSize={FontSizes.Small}
                        margin="0"
                        primary
                        style={{borderRadius: '20px'}}
                    >
                        Select seasons
                    </Button>
                // </TagWrapper>
            )}
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
                    {props.meal.ingredients.length || "0"} 
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

const Seasons = props => {
    const [seasons, setSeasons] = useState(props.meal.seasons);
    const [edit, setEdit] = useState(false);
    const [hover, setHover] = useState(false);

    const handleUpdateSeason = async(e) => {
        e.preventDefault();
        await updateMeal(props.id, {'seasons' : seasons})
        .then(async() => {
            setEdit(false)
            props.onReload();
        })
        .catch(err => console.log(err));
    };

    return (
        <Container>
            {!edit ? (
                <Container
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {seasons.length > 0 ? (
                        <>
                            <Tags 
                                tags={seasons}
                            />
                            {hover && !edit && 
                                <EditButton 
                                    onClick={() => setEdit(true)}
                                />
                            }
                        </>
                    ):(
                        <Button 
                            color="#B4D5AB"
                            fontSize={FontSizes.Small}
                            margin="0"
                            tertiary
                            height="2rem"
                            borderRadius="1rem"
                            onClick={() => setEdit(true)}
                        >
                            Select seasons
                        </Button>
                    )}
                    
                </Container>
            ) : (
                <SeasonForm
                    onSubmit={handleUpdateSeason}
                >
                    <Multiselect 
                        placeholder="Select season/s"
                        value={seasons}
                        data={["Summer", "Autumn", "Winter", "Spring", "All Year"]}
                        onChange={val => setSeasons(val)}
                    />
                    <SaveButton 
                        margin="0 0 0 0.5rem"
                    />
                    <CancelButton 
                        onClick={() => setEdit(false)}
                    />
                </SeasonForm>
            )}
        </Container>
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
    border-radius: 20px;
    background-color: ${colors.grey};
    position: relative;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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
    gap: 0.3rem;
    /* height: 2.5rem; */
` 
const TagWrapper = styled.div`
    /* height: 2rem; */
    /* width: 80px; */
    padding: 0 1rem;
    border-radius: 1.25rem;
    background-color: rgb(104, 191, 80, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
` 

const Placeholder = styled.div`
    height: 100%;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    /* padding: 10%; */

    img {
        width: 170px;
    }
`

const UploadButton = styled.button`
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: rgb(104, 191, 80, 0.9);
    z-index: 100;
    bottom: 0;
    font-size: ${FontSizes.Small};
    color: ${colors.white};
    outline: none;
    border: none;
`

const Image = styled.div`
    
`

const SeasonForm = styled.form`
    width: 100%;
    display: flex;
`