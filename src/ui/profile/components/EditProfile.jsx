import React, {
  useState,
  useEffect
} from 'react';
import styled from 'styled-components';

import {
  FontSizes,
  colors
} from 'common';

import {
  Text,
  H3,
  Input,
  TextArea,
  Button,
  Loader
} from 'common/components';

export const EditProfile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 500)
  },[])

  if(loading) {
    return (
      <Loader 
        spinnerColor={colors.white}
        size="35px"
        label="Loading..."
        color={colors.white}
      />
    )
  }

  return (
    <Container>
        <H3
          color={colors.white}
        >
          Edit Profile
        </H3>

        <Group>
          <Wrapper>
            <Label>Username</Label>
            <Input 
              placeholder="Username"
            />
          </Wrapper>
          <Wrapper>
            <Label>Email</Label>
            <Input 
              placeholder="Email"
            />
          </Wrapper>
        </Group>

        <Group>
          <Wrapper>
            <Label>First Name</Label>
            <Input 
              placeholder="Firstname"
            />
          </Wrapper>
          <Wrapper>
            <Label>Last Name</Label>
            <Input 
              placeholder="Lastname"
            />
          </Wrapper>
        </Group>

        <Group>
          <Wrapper>
            <Label>Address</Label>
            <Input 
              placeholder="Home Address"
            />
          </Wrapper>
        </Group>

        <Group>
          <Wrapper>
            <Label>City</Label>
            <Input 
              placeholder="City"
            />
          </Wrapper>
          <Wrapper>
            <Label>Country</Label>
            <Input 
              placeholder="Country"
            />
          </Wrapper>
          <Wrapper>
            <Label>Postal Code</Label>
            <Input 
              placeholder="Zip"
            />
          </Wrapper>
        </Group>

        <Group>
          <Wrapper>
            <Label>About Me</Label>
            <TextArea 
              placeholder="About Me"
            />
          </Wrapper>
        </Group>

        <ButtonContainer>
          <Button
            primary
            justifySelf="center"
            width="200px"

          >
            Update Profile
          </Button>
        </ButtonContainer>

    </Container>
  );
};

const Container = styled.form`
  display: grid;
  padding: 0 1rem;
  gap: 1rem;
  width: 100%;
`

const Group = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`

const Wrapper = styled.div`
  display: grid;
  gap: 0.3rem;
  width: 100%;
`

const Label = styled.label`
  font-size: ${FontSizes.Small};
  color: ${colors.grey_light};
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`