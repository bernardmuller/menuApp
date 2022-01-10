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
 } from "common/components";

import {
  PublicContainer,
  colors,
  FontSizes, 
} from 'common';

import { 
  DataStore
} from 'common/dataStore'

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


    img {
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
  background-color: #08090D;
  opacity: 0.85;
`

const LoginCardContainer = styled.div`
  background-color: #08090D;
  height: 100vh;
  width: 40%;
  padding: 4rem 6rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Header = styled.div`
 
`

const Form = styled.form`
    background-color: red;
    display: grid;
    grid-template-columns: 1;
`

const FormInputs = styled.div`
  
`

const Footer = styled.div`

`

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

        <Background />

        <LoginCardContainer>

          <Header>

            <H2
              margin="0"
            >
              Login
              </H2>

              {error && <h4 style={{color: "red", border: '1px solid red', }}>{error}</h4>}

          </Header>

          <Form>

            <FormInputs>   

              <input
                type="email"
                id="email"
                ref={enteredEmail}
                placeholder="Email"
                required
              />         

              {emailError && 
                <Text
                  color={colors.danger}
                >
                  {emailError}
                </Text>
              }

              <input
                type="password"
                id="password"
                ref={enteredPassword}
                placeholder="Password"
                required
              />    

              {passwordError && 
                <Text
                  color={colors.danger}
                >
                  {passwordError}
                </Text>
              }

            </FormInputs>

            <Button  
              primary
              type="submit"
              disabled={false}
              onClick={handleSubmit}
              width="90%"
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
