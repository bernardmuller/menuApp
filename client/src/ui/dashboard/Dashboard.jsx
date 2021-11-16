/* eslint-disable jsx-a11y/alt-text */
import React, { 
    useContext, 
    useEffect 
} from 'react';

import styled from 'styled-components';

import { 
    ActiveViewContext 
} from "contexts/ActiveViewContext";

// import { ThemeContext } from 'contexts/ThemeContext';
import { 
    PrivateContainer
} from 'common';

export const Dashboard = () => {  

    const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        activeContext.dispatch({ type: "DASHBOARD" });
    }, [])

    return (
        <PrivateContainer>
            <h1>Dashboard</h1>
        </PrivateContainer>
    )
};


