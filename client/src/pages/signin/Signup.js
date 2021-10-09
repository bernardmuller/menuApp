import React, { useRef, useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

import Card from '../../components/UI/card/Card'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  // const emailChangeHandler = (e) => {
  //   setEnteredEmail(e.target.value);

  //   if (enteredEmail.length > 0) {
  //     if (!enteredEmail.includes("@")) {
  //       setEmailMessage("Must contain '@'. ");
  //       setInvalidEmail(true);
  //     } else if (/[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/.test(enteredEmail)) {
  //       setEmailMessage("Special characters not allowed.");
  //       setInvalidEmail(true);
  //     } else {
  //       setEmailMessage("Looks good!");
  //       setInvalidEmail(false);
  //     }
  //   } else {
  //     setEmailMessage("");
  //     setInvalidEmail(null);
  //   }
  // };

  // const passwordChangeHandler = (e) => {
  //   setEnteredPassword(e.target.value);

  //   if (enteredPassword.length < 6) {
  //     setPasswordMessage("Must be longer than 6 characters.");
  //     setInvalidPassword(true);
  //   } else if (!/\d/.test(enteredPassword)) {
  //     setPasswordMessage("Must contain a number.");
  //     setInvalidPassword(true);
  //   } else if (!/[A-Z]/.test(enteredPassword)) {
  //     setPasswordMessage("Must contain a capital letter.");
  //     setInvalidPassword(true);
  //   } else {
  //     setPasswordMessage("Looks good!");
  //     setInvalidPassword(false);
  //   }
  // };

  return (
    <React.Fragment>
      <Card>
        <section>
          <h2>Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <div id="email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" ref={emailRef} required />
            </div>
            <div id="password">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" ref={passwordRef} required />
            </div>
            <div id="password-confirm">
              <label htmlFor="passwordconfirm">Password Confirmation</label>
              <input type="password" id="passwordconfirm" ref={passwordConfirmRef} required />
            </div>
            <button disabled={loading} type="submit">
              Sign Up
            </button>
          </form>
        </section>
      </Card>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </React.Fragment>
  )
}
