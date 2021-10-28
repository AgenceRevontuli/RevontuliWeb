import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Footer = ({ state }) => {
    const data = state.source.get("acf-options-page");
    return(
        <>
            <FooterSection>
                <FooterInfo>
                    <ColumnFooter width="45%">
                        <h3>Revontuli - Agence Marketing Normande</h3>
                        <p>Basée à Caen en Normandie, l'agence Revontuli vous propose des prestations de maketing digital. Création de site internet, référencement web SEO et SEA. WebAnalytics et Data. Transformation numérique. Fondée par Tristan Tornatore ex-Google. Revontuli aide également les startups dans le développement de leur stratégie digitale ainsi que des formations sur les thématiques de croissance d'une entreprise grâce à internet.</p>
                    </ColumnFooter>
                    <ColumnFooter>
                        <h3>Nos prestations digitales</h3>
                        <ul>
                            <Link link="https://www.revontuli.fr/prestations/creation-site-internet/"><li>Création de site internet</li></Link>
                            <Link link="https://www.revontuli.fr/prestations/referencement-web-seo-sea-social-ads/"><li>Référencement natuel SEO - SEA</li></Link>
                            <Link link="https://www.revontuli.fr/prestations/webanalytics-tracking/"><li>WebAnalytics et Tracking Data</li></Link>
                            <Link link="https://www.revontuli.fr/startups-normandie/"><li>Accompagnement des startups</li></Link>
                            <Link link="https://www.revontuli.fr/formations-webmarketing/"><li>Formation en marketing digital</li></Link>
                        </ul>
                    </ColumnFooter>
                    <ColumnFooter>
                        <h3>Informations pratiques</h3>
                        <ul>
                            <Link link="https://www.revontuli.fr/nous-contacter/"><li>Nous contacter</li></Link>
                            <Link link="https://www.revontuli.fr/"><li>Trouver une agence de référencement à Caen - Normandie</li></Link>
                            <Link link="https://www.revontuli.fr/mentions-legales"><li>Mentions légales</li></Link>
                            <Link link="https://www.revontuli.fr/politique-confidentialite"><li>Politique de confidentitalité</li></Link>
                        </ul>
                    </ColumnFooter>
                </FooterInfo>

                <Copyright>
                    <img 
                        src={data.acf.footer.footerLogo['url']} 
                        alt={data.acf.footer.footerLogo['alt']} 
                    />
                    <p>{data.acf.footer.copyright}</p>
                </Copyright>
            </FooterSection>
        </>
    )
}

export default connect(Footer);

const FooterSection = styled.footer`

`

const FooterInfo = styled.div`
    display: flex;
    padding: 80px 10%;
    justify-content: center;
    background-color: #184759;
    color: #fff;
    & > h2, h3, h4 {
        color: #fff;
        font-size: 1.5em;
    }
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`

const ColumnFooter = styled.div`
    width: ${props => props.width || "25%"};
    padding: 40px;
    & > ul, li {
        margin-left: 0px;
        padding-left: 0px;
        list-style: none;
        font-size: 1.05em;
        line-height: 2em;
    }
    & > p {
        font-size: 1em;
    }
    @media (max-width: 767px) {
        width: 100%;
        text-align: center;
    }
`

const Copyright = styled.div`
    text-align: center;
    padding: 40px 10%;
    & > p {
        font-size: 12px;
    }
    & > img {
        max-width: 300px;
    }
`