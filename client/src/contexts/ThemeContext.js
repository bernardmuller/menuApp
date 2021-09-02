import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()

function ThemeProvider({children}) {
    const value = {
        
      }
    
      return (
        <ThemeContext.Provider value={value}>
          {children}
        </ThemeContext.Provider>
      )
}

export default ThemeProvider;
