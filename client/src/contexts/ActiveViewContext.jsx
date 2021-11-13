import React, { 
    useReducer 
} from "react";

export const ActiveViewContext = React.createContext()

const initialState = {
    active: "",
  };
  
const activeReducer = (state, action) => {
    switch (action.type) {
        case "DASHBOARD":
            return { active: "DASHBOARD" };
        case "MEALS":
            return { active: "MEALS" };
        case "SEARCH":
            return { active: "SEARCH" };
        case "PLANNER":
            return { active: "PLANNER" };
        default:
            return state;
    }
};

export function ActiveViewProvider({ children }) {
    const [state, dispatch] = useReducer(activeReducer, initialState);
    
    return (
      <ActiveViewContext.Provider value={{ state, dispatch }}>
        {children}
      </ActiveViewContext.Provider>
    )
}

