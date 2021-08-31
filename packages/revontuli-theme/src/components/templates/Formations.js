import React from 'react';
import { connect, styled } from "frontity";
import Link from "./../link";
import Fleche from "./../svg/revontuli-fleche-droite.svg";

const Formations = ({ state }) => {
    return(
        <FormationsPage>
            <Part>
                <HeaderPart>
                    <h1>Nos programmes de formation professionnelle sur le Marketing Digtial</h1>
                    <p>Revontuli est officiellement centre de formation, nous mettons à votre disposition nos expériences et notre pédagogie pour faire évoluer vos connaissances ou celles de vos équipes sur les domaines du Marketing digital, création de site internet, analyses webanalytics et Data. Alors, on commence par quoi ? 🙂</p>
                </HeaderPart>
            </Part>
            <Part color="fff">
                <h2>Montez en compétence grâce à nos formations sur le Marketing Digital</h2>
                <FormationsItems>
                    <Formation>
                        <h3>Créez son site web sur Wordpress</h3>
                        <FormationInfos>
                            <Duree>2 jours</Duree>
                            <Niveau>Débutant</Niveau>
                        </FormationInfos>
                        <p>Apprenez les bonnes pratiques pour créer un site wordpress. De la mise en place jusqu'à la sécurisation contre le piratage, vous saurez créer et personnaliser des pages, mettre en forme des articles de blogs et optimiser votre référencement naturel.</p>
                    </Formation>
                    <Formation>
                        <h3>Formation Data et Webanalytics</h3>
                        <FormationInfos>
                            <Duree>3 jours</Duree>
                            <Niveau>Intermédiaire</Niveau>
                        </FormationInfos>
                        <p>Assurez le suivi de vos performances sur votre site internet grâce à Google Analytics. Vous apprendrez à baser vos décisions stratégiques sur la Data. Pour aller plus loin, découvrez Google Tag Manager et Google Data Studio.</p>
                    </Formation>
                    <Formation>
                        <h3>Mettez en place et optimisez vos campagnes Google Ads</h3>
                        <FormationInfos>
                            <Duree>3 jours</Duree>
                            <Niveau>Intermédiaire</Niveau>
                        </FormationInfos>
                        <p>On verra comment créer et paramétrer votre compte Google Ads pour assurer le suivi de vos futurs conversions. Ensuite nous découvrirons les bases de la mise en place d'une campagne Google Ads. Et enfin comment suivre et optimiser les performances.</p>
                    </Formation>
                    <Formation>
                        <h3>Automatiser vos actions avec Zapier et Airtable</h3>
                        <FormationInfos>
                            <Duree>1 jours</Duree>
                            <Niveau>Intermédiaire</Niveau>
                        </FormationInfos>
                        <p>Transformez digitalement vos actions pour booster les performances de votre entreprise. Zapier et Airtable sont des outils no-codes qui vous aiderons à créer des processus performants comme un CRM, un outil de facturation ...</p>
                    </Formation>
                </FormationsItems>
                <ButtonSecondary><Link link="https://exupery.io/">Formez-vous au digital <img src={Fleche} alt="revontuli-agence-digitale-caen-fleche-droite" width="25px" /></Link></ButtonSecondary>
            </Part>
            <Part>
                <Partenariat>
                    <div>
                        <h2>Un partenaire de confiance pour vous former à la transformation digitale</h2>
                        <h3>Nos formations sont données en partenariat avec Exupery</h3>
                        <p>Nous travaillons depuis plusieurs années avec l'organisme de formation Exupery qui met en place des programmes de formations sur la transformation numérique. Leur mission : Accompagner les entreprises dans la transition numérique. Exupery nous apporte leur expertise dans l'ingénierie pédagogique et Revontuli apporte son expertise sur les sujets de développement web et Webanalytics / Data.</p>
                        <ButtonSecondary><Link link="https://exupery.io/">Voir le site du centre de formation Exupery</Link></ButtonSecondary>
                    </div>
                    <div className="img-exupery">
                        <img src="https://www.wordpress.agence-communication-caen.fr/wp-content/uploads/2021/08/Logo-exupery-blanc.svg" alt="Logo-exupery-blanc" />
                    </div>
                </Partenariat>
            </Part>
        </FormationsPage>
    )
}

export default connect(Formations);

const FormationsPage = styled.div`
    width: 100%;
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
const HeaderPart = styled.div`
    & > h1 {
        font-size: 4em;
    }
    text-align: center;
    width: 750px;
    margin: 0 auto; 
`

const FormationsItems = styled.div`
    display: flex;
    gap: 40px;
`

const Formation = styled.div`
    width: 25%;
    font-size: 0.8em;
    text-align: left;
`
const FormationInfos = styled.div`
    display: inline-flex;
    gap: 10px;
    font-size: 0.6em;
`
const Duree = styled.p`
    margin: 0px;
    border: 2px solid;
    padding: 5px 10px; 
    border-radius: 50px;
`
const Niveau = styled.p`
    margin: 0px;
    border: 2px solid;
    padding: 5px 10px; 
    border-radius: 50px;
`

const Partenariat = styled.div` 
    text-align: left;
    display: flex;
    gap: 80px;
    & > div {
        width: 50%;
    }
    & > div > h2 {
        font-size: 2em;
    }
    & > div > h3 {
        font-size: 1.5em;
    }
    & > div > p {
        font-size: 1em;
    }
    & > div > img {
        max-width: 350px;
    }
    & >  .img-exupery {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #184759;
        border-radius: 15px;
        box-shadow: 4px 5px 0px #F28241;
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