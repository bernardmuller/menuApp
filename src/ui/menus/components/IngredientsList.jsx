import React, {useState} from 'react';
import styled from 'styled-components';

import {
    Text,
    Button
} from 'common/components';

import {
    colors,
    FontSizes
} from 'common';

import { 
    IoChevronDownOutline,
    IoChevronUpOutline,
    IoEllipsisVerticalSharp,
    IoCheckboxOutline,
    IoCheckbox
 } from "react-icons/io5";

export const IngredientsList = props => {
    const [expand, setExpand] = useState(false);
    return (
        <Container>
            <ButtonContainer
                type="button"
                onClick={() => setExpand(prev => !prev)}
                expand={expand}
            >
                <Text
                    fontSize={FontSizes.Small}
                    color={colors.grey_light}
                >
                    {props.name}
                </Text>
                {expand ? (
                    <IoChevronUpOutline 
                        size={24}
                        style={{ color: colors.grey_light}}
                    />
                ) : (
                    <IoChevronDownOutline 
                        size={24}
                        style={{ color: colors.grey_light}}
                    />
                )}
                
            </ButtonContainer>
            {expand &&
                <ItemsContainer>
                    {props.data.map((item, index) => (
                        <GroupItem
                            key={index}
                            data={item}
                        />
                    ))}
                </ItemsContainer>
            }
        </Container>
    )
};

const GroupItem = props => {
    const [hover, setHover] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [checked, setChecked] = useState(false)
    return (
        <Item
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {}}
        >   
            <div>
                {checked ? (
                    <IoCheckbox 
                        color={colors.primary}
                        onClick={() => setChecked(prev => !prev)}
                        size={22}
                    />
                ) : (
                    <IoCheckboxOutline 
                        color={colors.grey_light}
                        onClick={() => setChecked(prev => !prev)}
                        size={22}
                    />
                )}
                <Text
                    fontSize={FontSizes.Small}
                    color={colors.grey_dark}
                    margin="0 0 0 0.5rem"
                >
                    {props.data.name}
                </Text>
            </div>
            {hover &&
                <UtilButton
                    onClick={() => setShowMenu(prev => !prev)}
                >
                    <IoEllipsisVerticalSharp 
                        size={22}
                        color={colors.white}
                    />
                    {showMenu &&
                        <OptionsMenu 
                            onMouseOff={() => setShowMenu(false)}
                        />
                    }
                </UtilButton>
            }
        </Item>
    )
}

const OptionsMenu = props => {
    return (
        <MenuContainer
            onMouseLeave={() => props.onMouseOff()}
        >
            <MenuButton
                inline
            >
                Rename
            </MenuButton>
            <MenuButton
                inline
            >
                Edit
            </MenuButton>
            <MenuButton
                inline
                style={{color: "red"}}
            >
                Delete
            </MenuButton>
        </MenuContainer>    
    )
}

const Container = styled.div`
    width: 100%;
    display: grid;
`

const ButtonContainer = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 3%;
    outline: none;
    background: none;
    border: none;
    border-bottom: 1px solid ${colors.grey_dark}; 
    border-top: 1px solid ${colors.grey_dark}; 
`

const ItemsContainer = styled.div`
    width: 100%;
    display: grid;
`

const Item = styled.button`
    outline: none;
    border: none;
    background: none;
    width: 100%;
    height: 2.5rem;
    padding: 0.3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background-color: ${colors.secondary_dark};
    }
`

const UtilButton = styled.button`
    outline: none;
    border: none;
    background: none;
    position: relative;
`

const MenuContainer = styled.div`
    position: absolute;
    width: 200px;
    background-color: ${colors.white};
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    display:grid;
    top: -0.1rem;
    right: -0.6rem;;
`

const MenuButton = styled.button`
    outline: none;
    border: none;
    background: none;
    width: 100%;
    padding: 0.3rem 0;
    &:hover {
        background-color: ${colors.white_dark};
    }
`