/* eslint-disable jsx-a11y/alt-text */
import React, { 
    useContext,
    useEffect,
    useState
} from 'react';
import styled from 'styled-components';

import { useForm }  from 'react-hook-form';

import { 
    ActiveViewContext 
} from "contexts/ActiveViewContext";

import {
    Text,
    H3,
    Input,
    Dropdown,
    Button
} from 'common/components';

import {
    PrivateContainer,
    colors,
    FontSizes
} from 'common';

import {    
    IoClose,
} from "react-icons/io5";
import { useHistory } from 'react-router';

import { DataStore } from 'common/dataStore';


const Container = styled.div`
    display: Flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    width: 100%;
    padding: 0 2.5rem ;
    background-color: ${colors.secondary};
    border-radius: 1rem; 
     &> div {
         width: 100%;
         display: flex;
         justify-content: space-between;
     }
`
const ContentContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

`

const FormContainer = styled.form`
    width: 100%;
    display: grid;
    gap: 1rem;

    grid-template-areas: 
        'mealname'
        'season cuisine'
        'prep cook ready'
        'ingredients'
        'directions'
        'notes'
    ;

    &:nth-child(1) {
        grid-area: mealname;
    }
    &:nth-child(2) {
        grid-area: season;
    }
    &:nth-child(3) {
        grid-area: cuisine;
    }
    &:nth-child(4) {
        grid-area: prep;
    }
    &:nth-child(5) {
        grid-area: cook;
    }
    &:nth-child(6) {
        grid-area: ready;
    }
    &:nth-child(7) {
        grid-area: ingredients;
    }
    &:nth-child(8) {
        grid-area: directions;
    }
    &:nth-child(9) {
        grid-area: notes;
    }

`

const Textarea = styled.textarea`
    padding: 0.5rem 1rem;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
`

const Label = styled.label`
    color: ${colors.grey};
    font-size: ${FontSizes.Regular};
    margin: 0 0 0.5rem 0;
`

const KeyCodes = {
    comma: 188,
    enter: [10, 13],
  };
  
const delimiters = [...KeyCodes.enter, KeyCodes.comma];


const Ingredient = styled.div`
    width: 30% ;
    /* justify-self: center; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 0.3rem;
    background-color: ${colors.primary};
    color: white;
    height: 2rem;
    margin: 0.5rem 0 0 0 ;
    border-radius: 4px;

    button {
        background-color: white;
        border: 1px solid grey;
        border-radius: 50%;
        width: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        height: 1.5rem;
    }
`

const Close = styled.button`
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
    border: none;
`

export const CreateMeal = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const activeContext = useContext(ActiveViewContext);

    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);
    const [isKeyReleased, setIsKeyReleased] = useState(false);
    const [ingredientsError, setIngredientsError] = useState(false);
    const user = DataStore.get("LOGGED_IN_USER")

    const [mealData, setMealData] = useState({
        season: "",
        cuisine: "",
        ingredients: []
    })

    
    useEffect(() => {
        activeContext.dispatch({ type: "MEALS" });
    }, [])

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();
      
        if (key === "Enter" && trimmedInput.length && !tags.includes(trimmedInput)) {
          e.preventDefault();
          setTags(prevState => [...prevState, trimmedInput]);
          setInput('');
        }
      
        if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
          const tagsCopy = [...tags];
          const poppedTag = tagsCopy.pop();
          e.preventDefault();
          setTags(tagsCopy);
          setInput(poppedTag);
        }
      
        setIsKeyReleased(false);
    };
      
    const onKeyUp = () => {
        setIsKeyReleased(true);
    }

    const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
    }


    useEffect(() => {
        setMealData(prev => ({
            ...prev,
            ingredients: tags,
        }))
        if(mealData.ingredients.length !== 0) {
            setIngredientsError(false)
        }
    }, [tags])

    const [submit, setSubmit] = useState(false)


    useEffect(() => {
        if(!submit) return;
        console.log("submit")
        try {      
            // setError("");
            setLoading(true);
      
            async function createMeal(url) {
                const user = DataStore.get("LOGGED_IN_USER")
            
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');
                headers.append('Access-Control-Allow-Origin', 'true');
                headers.append('Authorization', `Bearer ${user.token}`);
            
                const response = await fetch(url, {
                  method: 'POST', 
                  mode: 'cors', 
                  credentials: 'include', 
                  headers: headers,
                  redirect: 'follow', 
                  referrerPolicy: 'no-referrer',
                })
                .catch(err => console.log(err))
                return response.json();
            }
            
            createMeal(`http://localhost:4001/meals/create`)
            .then(data => console.log(data))
            .finally(() => {
                setLoading(false);
            })
            .catch(err => console.log("err......." + err))
            
            // history.push('/meals');
      
        } catch (err) {
            console.log(err)
        }

        setSubmit(false);

    }, [submit])

    
    const onSubmit = data => {

        setMealData(prev => ({
            ...prev,
            ...data
        }))

        if(mealData.ingredients.length < 1) {
            setIngredientsError(true) 
            return;
        }
        
        setSubmit(true)
    }

    return (
        // <PrivateContainer>
            // <ContentContainer>

                <Container>
                    
                    <div
                        style={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}
                    >
                        <H3
                            color="white"
                            margin="0 0 1rem 0"
                        >
                            Create Meal
                        </H3>

                        <Close
                            onClick={() => props.onClose()}
                        >
                            <IoClose
                                size={40}
                                color='white'
                            />
                        </Close>
                    </div>
                    

                    <hr 
                        style={{borderTop: "1px solid grey"}}
                    />

                    <FormContainer
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <div>
                            <Label>
                                Meal name
                            </Label>

                            <Input 
                                type="text"
                                height="3rem"
                                placeholder="Meal name"
                                {...register("name", {
                                    required: "Please provide a meal name.",
                                })}
                            />

                            {errors.name &&
                                <Text
                                    fontSize={FontSizes.Small}
                                    color="red"
                                    margin="0.5rem 0 0 0"
                                    fontFamily=""
                                >
                                    {errors.name.message}
                                </Text>
                            }

                        </div>

                        <div
                            style={{display: 'grid', color: colors.green}}
                        >
                            <Label>
                                Meal image
                            </Label>

                            <input 
                                type="file" 

                            />
                        </div>

                        <div
                            style={{display: 'flex', gap: '1rem'}}
                        >
                            <div>
                                <Label>
                                    Season
                                </Label>

                                <Dropdown 
                                    heading="Select season"
                                    options={['Summer', 'Winter', 'Autumn', 'Spring']}
                                    height="3rem"
                                    style={{gridArea: "season"}}
                                    onOptionChange={val => {
                                        setMealData(
                                            prev => ({
                                                ...prev,
                                                season: val
                                            })
                                        )}
                                    }
                                />
                            </div>
                        
                            <div>

                                <Label>
                                    Cuisine
                                </Label>

                                <Dropdown 
                                    heading="Select cuisine"
                                    options={['1','2','3']}
                                    height="3rem"
                                    style={{gridArea: "cuisine"}}
                                    onOptionChange={val => {
                                        setMealData(
                                            prev => ({
                                                ...prev,
                                                cuisine: val
                                            })
                                        )}
                                    }
                                    
                                />
                            </div>

                        </div>
                        
                        <div
                            style={{display: 'flex', gap: '1rem'}}
                        >
                            <div>
                                <Label>
                                    Prep time
                                </Label>

                                <Input 
                                    type="number"
                                    height="3rem"
                                    name="prepTime"
                                    placeholder="Prep time"
                                    {...register("prepTime", {
                                        required: "Please provide a valid prep time in minutes.",
                                    })}
                                />

                                {errors.prepTime &&
                                    <Text
                                        fontSize={FontSizes.Small}
                                        color="red"
                                        margin="0.5rem 0 0 0"
                                        fontFamily=""
                                    >
                                        {errors.prepTime.message}
                                    </Text>
                                }
                            </div>

                            <div>
                                <Label>
                                    Cook Time
                                </Label>

                                <Input 
                                    type="number"
                                    height="3rem"
                                    name="cookTime"
                                    placeholder="Cook time"
                                    {...register("cookTime", {
                                        required: "Please provide a valid cook time in minutes.",
                                    })}
                                />

                                {errors.cookTime &&
                                    <Text
                                        fontSize={FontSizes.Small}
                                        color="red"
                                        margin="0.5rem 0 0 0"
                                        fontFamily=""
                                    >
                                        {errors.cookTime.message}
                                    </Text>
                                }
                            </div>
                            


                            <div>
                                <Label>
                                    Ready in
                                </Label>

                                <Input 
                                    type="number"
                                    height="3rem"
                                    name="readyIn"
                                    placeholder="Ready in"
                                    {...register("readyIn", {
                                        required: "Please provide a valid ready time in minutes.",
                                    })}
                                />

                                {errors.readyIn &&
                                    <Text
                                        fontSize={FontSizes.Small}
                                        color="red"
                                        margin="0.5rem 0 0 0"
                                        fontFamily=""
                                    >
                                        {errors.readyIn.message}
                                    </Text>
                                }

                            </div>
                        </div>

                        

                        <div
                            style={{display: 'grid'}}
                        >
                            <Label>
                                Ingredients
                            </Label>

                            <input 
                                type="text"
                                // height="3rem"
                                placeholder="Add ingredient"
                                value={input}
                                onKeyDown={onKeyDown}
                                onKeyUp={onKeyUp}
                                onChange={onInputChange}
                                style={{height: "3rem", borderRadius: "6px", padding:"0 0 0 1rem"}}
                            />
                            

                            {tags.map((tag, index) => (
                                <Ingredient>
                                    {tag}
                                    <button 
                                        type="button"
                                        onClick={() => deleteTag(index)}
                                    >x</button>
                                </Ingredient>
                            ))}

                            {ingredientsError &&
                                <Text
                                    fontSize={FontSizes.Small}
                                    color="red"
                                    margin="0.5rem 0 0 0"
                                    fontFamily=""
                                >
                                    Please provide at least one ingredient.
                                </Text>
                            }       
                        </div>
                        

                        <div
                            style={{display: 'grid'}}
                        >
                            <Label>
                                Directions
                            </Label>

                            <Textarea 
                                placeholder="Directions"
                                name="directions"
                                {...register("directions", {
                                    required: "Please provide directions on how to make the meal.",
                                })}
                            />

                            {errors.directions &&
                                <Text
                                    fontSize={FontSizes.Small}
                                    color="red"
                                    margin="0.5rem 0 0 0"
                                    fontFamily=""
                                >
                                    {errors.directions.message}
                                </Text>
                            }
                        </div>

                        <div
                            style={{display: 'grid'}}
                            
                        >
                            <Label>
                                Notes
                            </Label>

                            <Textarea 
                                placeholder="Notes"
                                name="notes"
                                {...register("notes")}
                            />
                        </div>

                        <div
                            style={{display: 'grid', width: "100%", justifyContent: "center"}}
                            
                        >     
                            <Button
                                type="submit"
                                primary
                                width="250px"
                            >
                                Create Meal
                            </Button>
                        </div>

                    </FormContainer>

                </Container>


            // {/* </ContentContainer> */}
        // {/* </PrivateContainer> */}
    )
}