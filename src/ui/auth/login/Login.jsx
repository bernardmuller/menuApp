import React, { useState, useContext, useRef } from "react";
import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";

import { 
  login 
} from 'actions'

import bg from 'assets/images/login_bg.jpg'

import { 
  Button,
  ContentCenterContainer,
  H2,
  Text,
  Input,
 } from "common/components";

import {
  PublicContainer,
  colors,
  FontSizes, 
} from 'common';

import { 
  DataStore
} from 'common/dataStore'



export const Login = () => {

  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit (e) {
    e.preventDefault();

    try {      
      setError("");
      setLoading(true);

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      const res = await fetch('https://munchies-api-5fqmkwna4q-nw.a.run.app/auth/login', {
          method: 'POST',
          mode: 'cors',
          redirect: 'follow',
          credentials: 'include', // Don't forget to specify this if you need cookies
          headers: headers,
          body: JSON.stringify({
              email: enteredEmail.current.value,
              password: enteredPassword.current.value
          })
      });
      const data = await res.json();
      console.log(data);

      DataStore.set("LOGGED_IN_USER", data)

      if(data.errors) {
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password);
      }
      if(data.user) {
        history.push('/dashboard')
      }

      // const ret = await login(enteredEmail.current.value, enteredPassword.current.value);

      // console.log(ret)

      // history.push("/dashboard");

    } catch (err) {
      console.log(err)
      // setError(`Failed to log in`);
      // enteredEmail.current.value = '';
      // enteredPassword.current.value = '';
    }

    setLoading(false);
  }  

  return (
    <Container>

        <Heading>MUNCHIES</Heading>

        <Background />

        <LoginCardContainer>

          <Header>

            <H2
              margin="0"
              fontSize="3.5rem"
            >
              <strong>Log</strong> in
            </H2>

              {error && <h4 style={{color: "red", border: '1px solid red', }}>{error}</h4>}

          </Header>

          <GoogleButton>

            <img 
              src="https://img.icons8.com/color/50/000000/google-logo.png" 
              alt="google icon"
            />
            <Text>Use Google Account</Text>
          </GoogleButton>

          <Or>
            <div></div>
              <span>OR</span>
            <div></div>
          </Or>

          <Form>

              <div>

                <Label
                  htmlFor="email"
                >
                  Email
                </Label>

                <Input
                  type="email"
                  id="email"
                  name="email"
                  ref={enteredEmail}
                  placeholder="eg. email@email.com"
                  required
                />         

              </div>


              {emailError && 
                <Text
                  color={colors.danger}
                >
                  {emailError}
                </Text>
              }

              <div>
                <Label
                  htmlFor="password"
                >
                  Password
                </Label>

                <Input
                  type="password"
                  id="password"
                  name="password"
                  ref={enteredPassword}
                  placeholder="*******"
                  required
                />    
              </div>

              {passwordError && 
                <Text
                  color={colors.danger}
                >
                  {passwordError}
                </Text>
              }


            <Button  
              primary
              height="3rem"
              type="submit"
              disabled={false}
              onClick={handleSubmit}
              width="100%"
              margin="1rem 0 0 0"
              fontSize="1.2rem"
            >
              Log In
            </Button>

          </Form>

          <Footer>
            <Link to="/forgot-password">Forgot Password?</Link>
          </Footer>

          <div>
            Need an account? <Link to="/auth/register">Register</Link>
          </div>
          

        </LoginCardContainer>
        
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background-image: url(${bg});
    background-size: 750px;
    background-color: black;


    &>img {
      position: absolute;
      left: 0;
      z-index: 0;
    }
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #080d08;
  /* background-image: linear-gradient(to right, #000000, #242424); */
  opacity: 0.9;
`

const LoginCardContainer = styled.div`
  background-color: white;
  height: 100vh;
  width: 33.333%;
  padding: 4rem 6rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`

const Header = styled.div`
 
`

const GoogleButton = styled.button`
  width: 100%;
  height: 3.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: none;
  border-radius: 4px;
  border: none;
  color: grey;
  font-size: ${FontSizes.Regular};
  padding: 0.4rem;
  position: relative;
  display: inline-block;
  transition: all 0.2s ease-in-out;

  &>img {
    height: 90%;
    position: relative;
    left: 0;
    top: 0;
    align-self: center;
  }

  &> span {
    vertical-align: middle;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

const Form = styled.form`
    display: grid;
    grid-template-columns: 1;
    gap: 1.5rem;
`

const Label = styled.label`
  font-size: ${FontSizes.Big};
  padding: 0 0 0.7rem 0;
`

const Footer = styled.div`
  text-align: center;

  a {
    text-decoration: none;
    color: grey;
    font-family: sans-serif;
    font-size: 0.9rem;
  }
`

const Heading = styled.h1`
  position: Fixed;
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
  top: 3rem;
  left: 4rem;
  z-index: 3;
  font-family: ;
`

const Or = styled.div`
  display: flex;
  align-items: center;
  &> div {
    border-top: 1px solid grey;
    width: 100%;
  }

  &> span {
    padding: 0 0.5rem;
  }
`