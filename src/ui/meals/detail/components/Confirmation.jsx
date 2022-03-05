import React from 'react';

import styled from 'styled-components';

import { 
    colors,  
    DeviceMediaQueries,
    FontSizes
} from 'common';

import { 
    Text,  
    Button,
} from 'common/components';

import ReactDOM from 'react-dom';

const ModalOverlay = props => {
    return (
        <Container>
            <Modal>
                <Text
                    fontSize={FontSizes.Small}
                >
                    {props.text}
                </Text>
                <Buttons>
                    <Button
                        onClick={() => props.onConfirm()}
                        primary
                    >
                        Yes
                    </Button>
                    <Button
                        onClick={() => props.onCancel()}
                        tertiary
                    >
                        No
                    </Button>

                </Buttons>
            </Modal>
        </Container>
    )
};

const Backdrop = (props) => {
    return (
        <BackdropContainer onClick={props.onClose} />
    )
};


export const Confirmation = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop 
                    onClose={props.onClose}
                />, 
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    {...props}
                    onCancel={props.onCancel}
                    onConfirm={props.onConfirm}
                />, 
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
};


const BackdropContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 700;
    background: rgba(0, 0, 0, 0.75);
    @media ${DeviceMediaQueries.tablet} {
        background: ${colors.white};
    }
`

const Container = styled.div`
    position: absolute;
    padding-top: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    
    @media ${DeviceMediaQueries.tablet} {
        padding-top: 0;
    }
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;    
`

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: ${colors.white};
    z-index: 900;
    padding: 20px 20px;
    border-radius: 10px;
    gap: 1.5rem;
    text-align: center;

    @media ${DeviceMediaQueries.laptopL} {
        width: 80%;
    }

    @media ${DeviceMediaQueries.tablet} {
        width: 100%;
        border-radius: 0;
    }
`