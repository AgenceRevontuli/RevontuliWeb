import React from 'react';
import { connect, styled } from "frontity";
import Link from "./../link";
import Fleche from "./../svg/revontuli-fleche-droite.svg";

const Startups = ({ state }) => {
    return(
        <StartupsPage>
            <HeaderStartups>
                <Title1>Notre programme d'accompagnement pour booster votre Startup</Title1>
                <Reassurance>
                    <h2>Une grande expérience auprès des startups</h2>
                    <Chiffre>
                        <p><span>+ de 150</span> Startups accompagnées</p>
                    </Chiffre>
                    <Chiffre>
                        <p><span>+ de 5 000</span> Entrepreneurs formés</p>
                    </Chiffre>
                    <Chiffre>
                        <p><span>+ de 2 ans</span> À accompagner les statups de <Link link="https://stationf.co/">Station F</Link></p>
                    </Chiffre>
                </Reassurance>
            </HeaderStartups>
            <Part>
                <Presta>
                    <h2>Validez votre Product Market Fit</h2>
                    <h3>Le marché de votre Startup</h3>
                    <p>Vous avez eu l'idée du siècle ? Il ne faut plus attendre pour vous lancer ! Je suis sûr que vous avez déjà une idée très précise du produit que vous voulez développer. Mais ce produit répond-t-il vraiment au besoin de marché ? Revontuli vous aide à prendre du recule. À penser Proposition de valeur avant de dépenser trop dans un produit qui n'achetera pas. On vous aide à valider votre marché grâce à nos méthodes de Growth et notre expertise du digital.</p>
                </Presta>
                <Presta>
                    <h2>Développez votre MVP</h2>
                    <h3>Le Produit Minimum Viable</h3>
                    <p>Parmi les étapes du développement d'une Startup. Une reste une source de doutes et de stress intense : Le développement du Produit Minimum Viable. Cette première version de votre produit digitalisé. Devriez-vous travailler avec un outil No-Code, Devez-vous engager dès maintenant un développeur fullstack ... On vous aide à faire le point, établir votre cahier des charges ou votre UserStoryMap pour passer à l'action.</p>
                </Presta>
                <Presta>
                    <h2>Hackez votre croissance</h2>
                    <h3>Growth (Hacking) Marketing</h3>
                    <p>Votre marché s'est révélé intéressé (POC). Vous avez développez votre première version (MVP) de votre produit. Il faut maintenant lachez les chevaux ! Passez de 100 à 10 000 clients rapidement grâces aux actions de marketing digital qui s'offrent à vous. On vous conseille et on conceptualise un plan d'actions clair qui répondra à vos objectifs.</p>
                </Presta>
            </Part>
            <Part color="#fff">
                <PrestaStartups>
                    <PrestaItem>
                        <h3>Développement de site internet</h3>
                        <p>Confiez-nous le développement et la maintenance de vos sites internet ou de vos landing page pour développer votre stratégie en ligne.</p>
                    </PrestaItem>
                    <PrestaItem>
                        <h3>Élaboration de CRM</h3>
                        <p>On vous aide à choisir les outils adaptés à vos besoins et ceux de votre cible pour créer un outil de gestion de la relation client qui vous aidera à apporter un service d'excellence.</p>
                    </PrestaItem>
                    <PrestaItem>
                        <h3>Gestion des campagnes Google ADS</h3>
                        <p>On vous accompagne dans la mise en place des campagnes sur la régie publicitaire Google Ads pour développer vos conversions.</p>
                    </PrestaItem>
                    <PrestaItem>
                        <h3>Optimisation du Référencement naturel - SEO</h3>
                        <p>On vous conseille sur les optimisation de votre position dans Google pour vous faire connaître au plus grand nombre.</p>
                    </PrestaItem>
                    <PrestaItem>
                        <h3>Tracking et Analyse Data</h3>
                        <p>On s'assure que vous ayez des données propres et utiles pour prendre les bonnes décisions en travaillant sur votre Google Tag Manager et votre Google Analytics.</p>
                    </PrestaItem>
                    <PrestaItem>
                        <h3>Coaching</h3>
                        <p>On développe avec vous des plans d'actions pour aider votre stratégie digitale et répondre à vos objectifs de levée de fonds et de développement.</p>
                    </PrestaItem>
                </PrestaStartups>
            </Part>
            <Part>
                <HeadPart>
                    <h2>Un encrage profond dans la résolution des problématiques des startups</h2>
                    <p>Pendant 2 ans, nous avons accompagné les startups de Station F (Incubateur Parisien accueillant plus de 1 000 startups par an) dans le cadre du programme Google for Startups France. Cette expérience nous a conférer une forte appétence pour aider les fondateurs de startups à développer leur stratégie digitale, créer un tracking efficace et nettoyer ainsi qu'optimiser leurs data et leur performance.</p>
                </HeadPart>
                <ImgPart>
                    <img src="https://www.wordpress.agence-communication-caen.fr/wp-content/uploads/2021/08/station-f-startups-accompagnement-normandie.jpeg" alt="" />
                </ImgPart>
            </Part>
            <Part color="#fff">
                <Presse2>
                    <img src="https://www.wordpress.agence-communication-caen.fr/wp-content/uploads/2021/08/google-startups-tristan-tornatore-revontuli.jpeg" alt="google-startups-tristan-tornatore-revontuli" />
                    <SubPress>
                        <h4>Ils parlent de nous !</h4>
                        <p>Lors de l'accompagnement Sprint pour la Startup Fairly Made nous avons croisé la route de Madame Figaro</p>
                        <ButtonSecondary>
                        <Link link="https://madame.lefigaro.fr/business/en-immersion-a-station-f-comment-google-accelere-les-startups-121120-183385">Découvrez l'article</Link>
                    </ButtonSecondary>
                    </SubPress>

                </Presse2>
                <Presse>
                    <h2>Une méthodologie éprouvée pour les startups</h2>
                    <p>Pour vous, nous sommes très attachés au processus de développement des startups. Nous mettons en place des actions d'accompagnement tirées de <Link link="https://www.eyrolles.com/Entreprise/Livre/sprint-9782212566062/" target="_blank">la méthodologie Sprint</Link> créee par Google Ventures.</p>
                    <h3>Nous sommes également partenaire de l'incubateur FounderSquare</h3>
                    <p>Nous sommes mentors de l'incubateur FounderSquare qui vous aide à transformer vos idées en Business en 12 mois.</p>
                </Presse>
            </Part>
            <Part>
                <Formulaire>
                </Formulaire>
            </Part>

        </StartupsPage>
    )
}

export default connect(Startups);

const StartupsPage = styled.div`
    background-color: #FCF8F0;
    width: 100%;
`

const HeaderStartups = styled.header`
    margin: 80px 10%; 
    padding: 80px 10%;
    background-color: #184759;
    border-radius: 15px;
    position: relative;
    box-sizing: border-box;
    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 20px 5%;
        padding: 20px 5%;
    }
`

const Title1 = styled.h1`
    width: 70%;
    font-size: 4em;
    color: #fff;
    @media (max-width: 767px) {
        font-size: 2.3em;
        width: 100%;
        text-align: center;
        & > h1 {
            width: 100%;
            text-align: center;
        }
    }
`

const Reassurance = styled.div`
    position: absolute;
    top: 20%;
    right: 60px;
    width: 350px;
    background-color: #fff;
    border-radius: 15px;
    padding: 40px;
    backdrop-filter: blur(10px) saturate(100%);
    -webkit-backdrop-filter: blur(14px) saturate(100%);
    background-color: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(255, 255, 255, 0.125);

    & > h2 {
        font-size: 2em;
    }
    @media (max-width: 767px) {
        position: inherit;
        top: 0;
        right: 0;
        width: 100%;
        background-color: #fff;
    }
`

const Chiffre = styled.div`
    & > p {
        font-size: 1.1em;
    }
    & > p > span {
        font-family: 'Londrina Solid', arial;
        color: #184759;
        font-size: 2em;
        margin-right: 10px;
    }
    & > p > a {
        border-bottom: 3px solid #FDA05A;
    }
`

const Part = styled.div`
    background-color: ${props => props.color || "#FCF8F0"};
    padding: 80px 10%;
    display: flex;
    justify-content: center: 
    align-items: center;
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`

const HeadPart = styled.div`
    max-width: 60%;
    padding-right: 40px;
    & > h2 {
        font-size: 3em;
    }
    @media (max-width: 767px) {
        padding-right: 0px;
        & > h2 {
            font-size: 2em;
        }
        max-width: 100%;
        text-align: center;
        & > p {
            font-size: 1em;
        }
    }
`

const ImgPart = styled.div`
    width: 40%;
    text-align: center;
    display: flex;
    & > img {
        width: 100%;
        border-radius: 15px;
        box-shadow: 5px 5px 0px #F28241;
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`

const ButtonSecondary = styled.button `
    transition: all 0.2s;
    background-color: #FDA05A;
    box-shadow: 4px 5px 0px #F28241;
    text-align: center;
    padding: 10px 20px;
    border: none;
    color: #fff;
    font-size: 1.3em;
    margin-top: 40px;
    border-radius: 3px;
    img {
        vertical-align: middle;
        margin-left: 20px;
    }
    &:hover {
        transform: scale(1.08);
        box-shadow: 0px 0px 0px #F28241;
    }
    & > a {
        font-family: 'Londrina Solid', cursive;
        font-weight: 400;
    }
`

const Presta = styled.div`
    padding-right: 80px;
    & > h2 {
        font-size: 1.5em;
    }
    & > h3 {
        font-size: 1em;
    }
    & > p {
        font-size: 1em;
    }
    @media (max-width: 767px) {
        padding-right: 0px;
    }
`

const PrestaStartups = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    @media (max-width: 767px) {
        flex-wrap: wrap;
        gap: 0px;
    }
`

const PrestaItem = styled.div`
    width: 25%;
    padding: 30px;
    & > h3 {
        font-size: 1.5em;
    }
    & > p {
        font-size: 1em;
    }
    @media (max-width: 767px) {
        width: 100%;
        padding: 10px;
    }
`

const Presse = styled.div`
    & > h2 {
        font-size: 3em;
    }
    & > h3 {
        font-size: 1.5em;
    }
    width: 60%;
    padding-left: 100px;
    @media (max-width: 767px) {
        margin-top: 200px;
        width: 100%;
        padding-left: 0px;
    }
`
const Presse2 = styled.div`
    position: relative;
    width: 40%;
    & > img {
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`

const SubPress = styled.div`
    padding: 10px 20px 20px 20px;
    margin: 15px;
    position: absolute;
    bottom: 0;
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.79);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    & > p {
        font-size: 1em;
        margin-bottom: 0px;
    }
    @media (max-width: 767px) {
        bottom: -150px;

    }

`

const Formulaire = styled.div`
`


