import React from 'react';
import { connect, styled } from "frontity";
import Link from "./../link";
import Fleche from "./../svg/revontuli-fleche-droite.svg";

const Contact = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    console.log(page);
    const Html2React = libraries.html2react.Component;
    //const page = state.source[data.type][data.id]
    return(
        <ContactPage>
            <ContentPage>
                <HeadingPage>
                    <h1>Contactons nous !</h1>
                    <p>Un projet à proposer ? Une question à poser ? Envie de partager un café sans raison. Toutes les demandes sont admissible ici ! Nous vous répondrons dans les 24h.</p>
                    <InfoContact>
                        Tél: 06 31 49 63 05
                    </InfoContact>
                    <InfoContact>
                        Email : foxy@revontuli.fr
                    </InfoContact>
                    <InfoContact>
                        Courier : 26 boulevard Winston Churchill - 14150 Ouistreham
                    </InfoContact>
                </HeadingPage>
                <ContactForm>
                    <Html2React html={page.content.rendered} />
                </ContactForm>
            </ContentPage>
        </ContactPage>
    )
}

export default connect(Contact);

const ContactPage = styled.div`
    width: 100%; 
    background-color: #FCF8F0;
`

const ContentPage = styled.div`
    padding: 80px 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7%;
`

const HeadingPage = styled.div`
    padding: 7%;
    border-radius: 15px;
    background-color: #fff;
    width: 40%;
`

const ContactForm = styled.div`
    width: 60%;
    & > div > form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
    }
    & > div > form > p {
        font-size: 1em;
        color: #184759;
    }
    & > div > form > p > label {
        display: block;
        width: 100%;
    }
    & > div > form > p > label > span > input, textarea {
        width: 100%;
        padding: 10px 0px;
        border: none;
        border-bottom: 2px solid #D96725;
        background-color: #FCF8F0;
    }
    & > div > form > .message {
        width: 100%;
    }
    & > div > form > .message > label > span > textarea{
        width: 95%!important;
        font-family: 'Nunito', sans-serif;
    }
    & > div > form > .btn {
        display: block;
        width: 100%;
        & > input {
            cursor: pointer;
            font-family: 'Londrina Solid', arial;
            font-size: 1.5em;
            padding: 10px 80px;
            transition: all 0.2s;
            background-color: #FDA05A;
            box-shadow: 4px 5px 0px #F28241;
            border: none;
            color: #fff;
            &:hover {
                transform: scale(1.08);
                box-shadow: 0px 0px 0px #F28241;
            }
        }
    }
`

const InfoContact = styled.div`
    margin: 20px 0px;
`