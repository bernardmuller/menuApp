import React, {useContext} from "react";
import styled from 'styled-components';
import colors from "utils/colors";

import { useAuth } from "contexts/AuthContext";
import { Link } from "react-router-dom";
import { ThemeContext } from 'contexts/ThemeContext';

import Container from 'components/UI/container/Container';
import ContentCard from "components/UI/card/ContentCard";
import Header from "components/header/Header";

import burger_bg from 'assets/images/burger_bg.jpg'

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 22rem;
`

export default function Profile() {  
  const { currentUser } = useAuth()  
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <Container>
      {/* <Header backgroundImg={burger_bg} ObjPos={"100% 70%"} /> */}
      <ProfileContainer>    
          <ContentCard darkMode={darkMode}>
            <h2>Profile</h2>          
            <p><strong>Email:</strong> {currentUser.email}</p>
            <Link to="/update-profile">
              Update Profile
            </Link>  
          </ContentCard>  
      </ProfileContainer>      
    </Container>
  )
};

