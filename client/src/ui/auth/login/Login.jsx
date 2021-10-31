import React, { useState, useContext, useRef } from "react";
import styled from 'styled-components';
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import bg from 'assets/images/login-bg.jpg'

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
  background-color: ${colors.white};
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
    border: 1px solid ${colors.grey};
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: ${FontSizes.Regular};
  }
`

const Footer = styled.div`
  padding-top: 1rem;
`

export const Login = () => {

  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {      
      setError("");
      setLoading(true);
      await login(enteredEmail.current.value, enteredPassword.current.value);
      history.push("/dashboard");
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
            >Login</H2>
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
        </LoginCardContainer>
        {/* <div className={styles.need_account}>
          Need an account? <Link to="/signup">Sign Up</Link>
        </div> */}
        
      </ContentCenterContainer>
    </PublicContainer>
  );
}
