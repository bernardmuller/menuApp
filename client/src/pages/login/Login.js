import React, { useState, useContext, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styles from "./Login.module.css";
import Button from "../../components/UI/button/Button";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Login() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
    <React.Fragment>
      <div
        className={
          darkMode
            ? `${styles.login_card} ${styles.login_card_light}`
            : `${styles.login_card} ${styles.login_card_dark}`
        }
      >
        <h2>Login</h2>
        <div className={styles.message}>
            {error && <h3 style={{color: "red", border: '1px solid red', }}>{error}</h3>}
        </div>
        <form onSubmit={handleSubmit}>
          <div id="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={enteredEmail}
              required
            />            
          </div>
          <div className={styles.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={enteredPassword}
              required
            />            
          </div>
          <Button disabled={loading} type="submit">
            Log In
          </Button>
        </form>
        <div className={styles.forgot_password}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
      {/* <div className={styles.need_account}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> */}
    </React.Fragment>
  );
}
