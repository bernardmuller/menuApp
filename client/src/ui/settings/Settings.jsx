import React, {useContext} from "react";
import styled from 'styled-components';
import { colors } from 'common';

import { useAuth } from "contexts/AuthContext";
import { Link } from "react-router-dom";

import ContentCard from "common/components/card/ContentCard";

import { 
  PrivateContainer
} from "common";

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 22rem;
`

export const Settings = () => {  
  const { currentUser } = useAuth()  
  return (
    <PrivateContainer>
      {/* <Header backgroundImg={burger_bg} ObjPos={"100% 70%"} /> */}
      <ProfileContainer>    
          <ContentCard>
            <h2>Profile</h2>          
            <p><strong>Email:</strong> {currentUser.email}</p>
            <Link to="/update-profile">
              Update Profile
            </Link>  
          </ContentCard>  
      </ProfileContainer>      
    </PrivateContainer>
  )
};

