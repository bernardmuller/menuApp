import React, { 
    useContext, 
    useEffect 
} from 'react';

import { 
    ActiveViewContext 
} from "contexts/ActiveViewContext";

import {
    PrivateContainer 
} from 'common';

export const Planner = () => {
    
    const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        activeContext.dispatch({ type: "PLANNER" });
    }, [])

    return (
        <PrivateContainer>
            <h1>Planner</h1>
        </PrivateContainer>
    )
};

