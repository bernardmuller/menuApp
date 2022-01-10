import React, { useState, useContext, useRef } from "react";
import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";

import { 
  register 
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

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -100;
  object-fit: cover;
  filter: blur(6px);
  transform: scale(1.1);
`

const LoginCardContainer = styled.div`
  max-width: 400px;
  width: 80%;
  max-height: 500px;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.secondary};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding: 2rem;
`

const Header = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${colors.primary};
  text-shadow: rgba(104, 191, 80, 0.70) 0px 5px 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 100%;
  justify-content: space-between;
`

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;    

  input {
    height: 4rem;
    border: 1px solid ${colors.light.grey};
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: ${FontSizes.Regular};
  }
`

const Footer = styled.div`
  padding-top: 1rem;
`

export const Register = () => {

  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {      
      setError("");
      setLoading(true);

      // const ret = await register(enteredEmail.current.value, enteredPassword.current.value);

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      const res = await fetch('http://localhost:4001/register', {
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
      if(data.errors) {
        setEmailError(data.errors.email);
        setPasswordError(data.errors.password);
      }
      if(data.user) {
        history.push('/dashboard')
      }
      // console.log(ret)

      // history.push("/dashboard");

    } catch (err) {
      setError(`Failed to log in`);
      enteredEmail.current.value = '';
      enteredPassword.current.value = '';
    }

    setLoading(false);
  }  

  return (
    <PublicContainer>

      <ContentCenterContainer>

        <BackgroundImage src={bg} />

        <LoginCardContainer>

          <Header>

            <H2
              margin="0"
            >
              Register
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

              <input
                type="password"
                id="password"
                ref={enteredPassword}
                placeholder="Password"
                required
                />    

            </FormInputs>
            
            <Button  
              primary
              type="submit"
              disabled={false}
              onClick={handleSubmit}
              width="90%"
            >
              Register
            </Button>

          </Form>

          {/* <Footer>
            <Link to="/forgot-password">Forgot Password?</Link>
          </Footer> */}
        <div>
          Already have an account? <Link to="/auth/login">Login</Link>
        </div>

        </LoginCardContainer>
        
      </ContentCenterContainer>
    </PublicContainer>
  );
}
