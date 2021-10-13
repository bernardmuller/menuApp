import React, { useContext } from 'react';
import styled from 'styled-components';
import colors from 'utils/colors';
import { ThemeContext } from 'contexts/ThemeContext';

const ContentCardContainer= styled.div`
  background-color: ${props => props.darkMode ? colors.light.black : colors.white};
  color: ${props => props.darkMode ? colors.white : colors.black};
  width: 60%;
  padding: 2rem 3.5rem;
  border-radius: 1rem;
`

const ContentCard = ({children}) => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <ContentCardContainer darkMode={darkMode} >
            {children}
        </ContentCardContainer>
    )
};

export default ContentCard;
