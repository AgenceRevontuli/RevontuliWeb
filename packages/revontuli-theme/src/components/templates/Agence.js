import React from 'react';
import { connect, styled } from "frontity";
import Link from "./../link";
import Fleche from "./../svg/revontuli-fleche-droite.svg";

const Agence = ({ state }) => {
    return(
        <AgencePage>
            <Part>
                <HeadingPart>
                    <h1>Qu'est-ce qui se cache derrière l'agence de Marketing : Revontuli ?</h1>
                    <p>Si vous êtes ici, deux possibilités :<br/>
                    1. Vous êtes intéressé par ce que nous faisons et vous vous demandez qui est derrière notre agence. <br/>
                    2. Vous êtes très curieux de savoir pourquoi ce nom aussi compliqué à lire la première fois ...<br/>
                    Ou peut être que vous rentrez dans les deux catégories.<br/> Très bien ! Dans ce cas là, on va tout vous dévoiler ! Transparence 100% ✌️
                    </p>
                </HeadingPart>
            </Part>
            <Part color="#fff">
                <Name>
                    <NameItem>
                        <Anagram>RE</Anagram>
                        <h2>Indépendance</h2>
                        <p>Revontuli c'est une agence de marketing digital indépendante. Nous voulons vous offrir nos compétences avec toute la libérté qui est la notre !</p>
                    </NameItem>
                    <NameItem>
                        <Anagram>VON</Anagram>
                        <h2>Passion</h2>
                        <p>On est capable de coder votre site toute la nuit et ça n'entâchera pas notre volonté et notre sourire à vous le livrer à la suite. Notre travail, notre passion !</p>
                    </NameItem>
                    <NameItem>
                        <Anagram>TU</Anagram>
                        <h2>Écoute</h2>
                        <p>On vous entend ET on vous écoute ! On répond à vos objectifs et ceux de vos clients pour mettre en place une stratégie efficace et pertinente.</p>
                    </NameItem>
                    <NameItem>
                        <Anagram>LI</Anagram>
                        <h2>Humain</h2>
                        <p>On est des pro de l'automatisation et pourtant, on a une mission. Rendre le numérique au service du client. Et jamais l'inverse !</p>
                    </NameItem>
                </Name>
            </Part>
            <Part color="#184759" >
                <Fondateur>
                    <FondateurImg>
                        <img src="https://www.wordpress.agence-communication-caen.fr/wp-content/uploads/2021/08/Tristan-Profil-revontuli.jpg" alt="" />
                    </FondateurImg>
                    <FondateurTxt>
                        <h2>Pourquoi fonder une agence de Marketing Digital ?</h2>
                        <p>Revontuli a été fondé par Tristan Tornatore en 2021. Après avoir accompagné des milliers d'entrepreneurs dans leur transition digitale et sur leur stratégie, Tristan décide de retourner dans sa Normandie natale à Caen. Il continue d'accompagner ses clients en Freelance et décide de développer une agence pour répondre aux besoins qui sont souvents similaires de la part des entreprises.</p>
                        <p>Revontuli, c'est avant tout un partenaire de votre croissance. Nous vous accompagnons et vous conseillons. Faire un site web, tout le monde peut le faire. Mais développer votre notoriété et vous permettre d'atteindre vos objectifs sur le web. Là, vous pouvez compter sur nous !</p>
                    </FondateurTxt>
                </Fondateur>
            </Part>
            <Part>
                <Revontuli>
                    <h2>Et pour le nom ? D'où ça vient Revontuli ?</h2>
                    <p>Revontuli est un nom qui vient du peuple Sami, il signifie "Queue du renard de feu". C'est également le mot qui désigne les aurores boréales dans le nord.</p>
                    <h3>Une histoire de renard 🦊</h3>
                    <p>Dans la légende Sami, les aurores boréales sont générées par un petit esprit renard malicieux. Le Revontuli. Chahutant avec les autres esprits, le renard dans ses bonds agiles, effleure la cîme des pins eneigés créeant une émulsion de flocon de neige dans le ciel. Le reflet de sa queue enflammée fait par conséquent jaillir des lueurs Mauves dans le ciel : Les aurores.</p>
                    <h3>Vous faire briller là où ça compte pour vous !</h3>
                    <p>Rien ne colle plus à l'idée que l'on se fait de notre métier. Savoir vous faire briller là où vos clients le sont et vous cherche. Les aurores ont toujours eu un rôle de guide qui fascine. C'est tout à fait ce que l'on veut vous offrir. Et voilà comment a été trouvé le nom Revontuli !</p>
                </Revontuli>
            </Part>
        </AgencePage>
    )
}

export default connect(Agence);

const AgencePage = styled.div`
    width: 100%;
`

const HeadingPart = styled.div`
    max-width: 750px;
    margin: 0 auto;
    & > h1 {
        font-size: 4em;
    }
    & > p {
        font-size: 1em;
    }
    @media (max-width: 767px) {
        & > h1 {
            font-size: 3em;
        }
    }
`

const Part = styled.div`
    padding: 80px 10%;
    text-align: center;   
    background-color: ${props => props.color || "#FCF8F0"};
    & > h2 {
        font-size: 2em;
        max-width: 600px;
        text-align: left;
    }
`

const Name = styled.div`
    display: flex;
    gap: 40px;
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`
const NameItem = styled.div`
    position: relative;
    width: 25%;
    background-color: #fff;
    padding: 40px;
    font-size: 0.5em;
    border-radius: 5px;
    box-shadow: 0px 0px 35px rgba(0,0,0,0.08);
    @media (max-width: 767px) {
        width: 100%;
        margin-top: 40px;
        & > p {
            font-size: 2em;
        }
    }
`
const Anagram = styled.div`
    font-family: 'Londrina Solid', arial;
    color: #FDA05A;
    font-size: 10em;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
`

const Fondateur = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    text-align: left;
    color: #fff;
    & > div > h2 {
        color: #fff;
        font-size: 2em;
    }
    & > div > p {
        font-size: 1em;
    }
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`

const FondateurImg = styled.div`
    text-align: center;
    width: 40%;
    & > img {
        width: 300px;
        border-radius: 50%;
        border: 20px solid rgba(255,255,255,0.2);
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`
const FondateurTxt = styled.div`
    max-width: 800px;
`

const Revontuli = styled.div`
    & > h2 {
        font-size: 3em;
    }
    max-width: 800px;
    margin: 0 auto;
`