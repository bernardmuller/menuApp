import React from "react"

import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import Card from "./UI/card/Card"

export default function Profile() {  
  const { currentUser } = useAuth()  

  return (
    <>
      <Card>        
          <h2 className="text-center mb-4">Profile</h2>          
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>        
      </Card>      
    </>
  )
}

