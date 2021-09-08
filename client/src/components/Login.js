import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Card from "./UI/card/Card"
import styles from './Login.module.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <Card className={styles.input}>
        <div>
          <h2 className="text-center mb-4">Log In</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <form onSubmit={handleSubmit}>
            <div id="email">
              <div>Email</div>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <div>Password</div>
              <input type="password" ref={passwordRef} required />
            </div>
            <button disabled={loading} className="w-100" type="submit">
              Log In
            </button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </Card>
      <div>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
