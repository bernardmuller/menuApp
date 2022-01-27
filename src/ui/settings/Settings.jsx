import React, { 
  useContext, 
  useEffect 
} from 'react';

import styled from 'styled-components';

import { 
  ActiveViewContext 
} from "contexts/ActiveViewContext";

import { 
  PrivateContainer,
  colors
} from 'common';

export const Settings = () => {  
  const activeContext = useContext(ActiveViewContext);
    
    useEffect(() => {
        activeContext.dispatch({ type: "SETTINGS" });
    }, [])
  return (
    <PrivateContainer>
      <LeftWrapper>
                <h1
                    style={{color: "black"}}
                >Settings Left</h1>
            </LeftWrapper>
            <RightWrapper>
                <h1
                    style={{color: "white"}}
                >Settings Right</h1>
            </RightWrapper>    
    </PrivateContainer>
  )
};


const LeftWrapper = styled.div`
    height: 100%;
    width: 30%;
    background-color: ${colors.white};
`
const RightWrapper = styled.div`
    height: 100%;
    width: auto;
`


