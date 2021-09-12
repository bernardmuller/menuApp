import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

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
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}
