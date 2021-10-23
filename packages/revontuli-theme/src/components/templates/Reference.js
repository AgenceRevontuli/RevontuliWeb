import React from 'react';
import { connect, styled } from "frontity";
import Link from "./../link";

const Reference = ({ state }) => {
    return(
        <ReferenceSection>
            <Logo>
                <img src="https://www.wordpress.agence-communication-caen.fr/wp-content/uploads/2021/08/logo-reference-revontuli-agence-marketing-founder-square_founder-square-1.png" alt="" />
            </Logo>
            <Logo>
                <img src="https://www.wordpress.agence-communication-caen.fr/wp-content/uploads/2021/08/logo-reference-revontuli-agence-marketing-cnes-1.png" alt="" />
            </Logo>
            <Logo>
                <img src="https://www.wordpress.agence-communication-caen.fr/wp-content/uploads/2021/08/logo-reference-revontuli-agence-marketing-google-1.png" alt="" />
            </Logo>
            <Logo>
                <img src="https://www.wordpress.agence-communication-caen.fr/wp-content/uploads/2021/08/logo-reference-revontuli-agence-marketing-tour-de-france_Plan-de-travail-1-1.png" alt="" />
            </Logo>
            <Logo>
                <img src="https://www.wordpress.agence-communication-caen.fr/wp-content/uploads/2021/08/logo-reference-revontuli-agence-marketing-vinci-autoroute-1.png" alt="" />
            </Logo>
        </ReferenceSection>
    )
}

export default connect(Reference);

const ReferenceSection = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    margin-top: 60px;
    @media (max-width:767px) {
        display: none;
    }
`

const Logo = styled.div`
    & > img {
        width: 150px;
    }
`