import React from 'react';
import { connect, styled } from "frontity";
import Link from "./../link";
import Fleche from "./../svg/revontuli-fleche-droite.svg";

const Methodologie = ({ state }) => {
    return(
        <>
            <Heading>Découvrez la méthodologie de nos accompagnements digitaux</Heading>
        </>
    )
}

export default connect(Methodologie);

const Heading = styled.h3`
    max-width: 800px; 
    margin: 40px auto;
    font-size: 2.5em;
    text-align: center; 

`