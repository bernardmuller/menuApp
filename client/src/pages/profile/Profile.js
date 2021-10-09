import React, {useContext} from "react"

import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import Card from "../../components/UI/card/Card"
import { ThemeContext } from '../../contexts/ThemeContext'

import styles from './Profile.module.css'
import Container from '../../components/UI/container/Container'

export default function Profile() {  
  const { currentUser } = useAuth()  
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <Container>
      <Card className={darkMode ? `${styles.card} ${styles.card_dark}` : `${styles.card} ${styles.card_light}`}>        
          <h2>Profile</h2>          
          <p><strong>Email:</strong> {currentUser.email}</p>
          <Link to="/update-profile" className="btn btn-primary w-50 mt-3">
            Update Profile
          </Link>        
      </Card>      
    </Container>
  )
}

