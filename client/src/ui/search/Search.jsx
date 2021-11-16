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

export const Search = () => {
    
    const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        activeContext.dispatch({ type: "SEARCH" });
    }, [])

    return (
        <PrivateContainer>
            <h1>Search</h1>
        </PrivateContainer>
    )
};
