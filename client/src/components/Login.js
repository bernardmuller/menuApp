import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Card from "./UI/card/Card";
import styles from "./Login.module.css";
import Button from "./UI/button/Button";

export default function Login() { 
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState("")
  const [passwordMessage, setPasswordMessage] = useState("")
  const [invalidEmail, setInvalidEmail] = useState()
  const [invalidPassword, setInvalidPassword] = useState()
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      if(invalidEmail || invalidPassword) throw "Invalid username or password"
      setError("");
      setLoading(true);
      await login(enteredEmail, enteredPassword);
      history.push("/dashboard");
    } catch(err) {
      setError(`Failed to log in: ${err}`);
    }

    setLoading(false);
  }

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);  


    if(enteredEmail.length > 0) {
      if(!enteredEmail.includes('@')) {
        setEmailMessage("A valid email contains an '@'. ")
        setInvalidEmail(true)
      } else if(/[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/.test(enteredEmail)) {
        setEmailMessage("Special characters not allowed.")
        setInvalidEmail(true)
      } else {
        setEmailMessage("Looks good!")
        setInvalidEmail(false)
      }
    } else {
      setEmailMessage("")
      setInvalidEmail(null)
    }
    
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    if(enteredPassword.length < 6) {  
      setPasswordMessage("Password must be longer than 6 characters.")
      setInvalidPassword(true)
    } else if (!/\d/.test(enteredPassword)) {
      setPasswordMessage("Password must contain a number.")
      setInvalidPassword(true)
    } else if (!/[A-Z]/.test(enteredPassword)) {
      setPasswordMessage("Password must contain a capital letter.")
      setInvalidPassword(true)
    } else {
      setPasswordMessage("Looks good!")
      setInvalidPassword(false)
    }
    
  };

  return (
    <>
      <Card className={styles.input}>
        <div>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <div id="email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={emailChangeHandler} required />
              {emailMessage && <p className={invalidEmail? styles.invalid : styles.valid}>{emailMessage}</p>}
            </div>
            <div id="password">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={passwordChangeHandler} required />
              {passwordMessage && <p className={invalidPassword? styles.invalid : styles.valid}>{passwordMessage}</p>}
            </div>
            <Button disabled={loading} type="submit">
              Log In
            </Button>
          </form>
          <div>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </Card>
      <div>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
