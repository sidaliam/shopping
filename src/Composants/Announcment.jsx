import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
 height:30px;
 background-color: teal;
 color: white;
 display:flex;
 align-items:center;
 justify-content:center;
 font-size:14px;
 font-size:14px;
`
const Announcment = () => {
    return (
        <Container>
           Bienvenue Sur votre site 100% e-commerce
        </Container>
    );
};

export default Announcment;