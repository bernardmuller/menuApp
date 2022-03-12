import React, {
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';

import {
    H3,
    Text,
    Searchbar
} from 'common/components'

import {
  colors,
  FontSizes
} from 'common'
import { IngredientsList } from './IngredientsList';

export const GroceryList = props => {
  const [items, setItems] = useState(props.meal_items);
  const misc = [{"name":"Misc Item"}, {"name":"Misc Item"}, {"name":"Misc Item"}, {"name":"Misc Item"}];

  useEffect(() => {
    let temp = [];
    props.meal_items && props.meal_items.forEach((meal) => {
      console.log(meal)
      meal.ingredients.forEach((item)=> {
        temp.push(item)
      })
    })
    console.log(temp)
    setItems(temp);
  }, [])

  return (
      <Container>
          <H3
            color={colors.white}
            fontSize={FontSizes.Big}
          >
              Grocery list
          </H3>
        <Head>
          <Searchbar
            onSearch={() => {}}
            placeholder="Add Item"
            dark
            width="30%"
            height="2.5rem"
          />
          <Text
            color={colors.grey_dark}
            fontSize={FontSizes.Small}
          >
              Total: 8
          </Text>
        </Head>

        <IngredientsList 
          name="Main Ingredients"
          data={items}
        />
        <IngredientsList 
          name="Miscellaneous Items"
          data={misc}
        />
      </Container>
  )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`