import React from 'react';
import { connect, styled } from "frontity";
import Link from "./../link";
import Fleche from "./../svg/revontuli-fleche-droite.svg";
import Methodologie from './Methodologie';
import Reference from './Reference';


const Home = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const itemsPresta = page.acf.sectionPrestations.itemsPrestations;
    return(
        <Section>
            <Heading>
                <h1>{page.acf.titlePage}</h1>
                <p>{page.acf.headerP}</p>
                <Button>
                    <Link link={page.acf.headerlink}>{page.acf.buttonHeader}<img src={Fleche} alt="revontuli-agence-digitale-caen-fleche-droite" width="25px" /></Link>
                </Button>
                <Reference />
            </Heading>  
            <Part>
                <HeadingSection>
                    <Revontuli>
                        <h2>{page.acf.section2title}</h2>
                        <p>Revontuli</p>
                    </Revontuli>
                    <h3>{page.acf.section2h3}</h3>
                    <p>{page.acf.section2P}</p>
                    <ButtonSecondary>
                        <Link link={page.acf.Section2btnLink}>{page.acf.Section2btnText}<img src={Fleche} alt="revontuli-agence-digitale-caen-fleche-droite" width="25px" /></Link>
                    </ButtonSecondary>
                </HeadingSection>
            </Part>
            <Part color="#184759">
                <Prestation id="prestations">
                        <HeaderPrestation>
                            <h2>{page.acf.sectionPrestations.titreH2}</h2>
                        </HeaderPrestation>
                        <PrestationItems>
                            {itemsPresta.map((itemPresta) => {
                                return(
                                    <Item key={itemPresta.id}>
                                        <img src={itemPresta.imagePresta.url} alt={itemPresta.imagePresta.alt} />
                                        <h3>{itemPresta.titrePresta}</h3>
                                        <p>{itemPresta.textPresta}</p>
                                    <LinkStyled>
                                        <Link link={itemPresta.linkPresta}>{itemPresta.textlinkPresta}</Link>
                                    </LinkStyled>
                                </Item>
                                )
                            })
                            }
                        </PrestationItems>
                </Prestation>
            </Part>
            <Part color="#fff">
                <HeadingSection>
                    <h2>{page.acf.sectionLieu.titreH2}</h2>
                    <h3>{page.acf.sectionLieu.titreH3}</h3>
                    <p>{page.acf.sectionLieu.texteSection}</p>
                </HeadingSection>
                <BodySection>
                    <img 
                        src={page.acf.sectionLieu.imageLieu.url}
                        alt={page.acf.sectionLieu.imageLieu.alt}
                    />
                    <p className="moho1">MoHo</p>
                    <p className="moho2">Caen</p>
                </BodySection>
            </Part>
            <Part>
                <HeadingSection>
                    <h2>{page.acf.sectionName.titreH2}</h2>
                    <h3>{page.acf.sectionName.titreH3}</h3>
                    <p>{page.acf.sectionName.texteSection}</p>
                    <LinkBrut>
                        <Link link={page.acf.sectionName.linkBtn}>{page.acf.sectionName.texteBtn}</Link>
                    </LinkBrut>   
                </HeadingSection>
            </Part>
            <Part color="#fff">
                <HeadingSection>
                    <HeadTag>Notre mission</HeadTag>
                    <HeadH2>Aider toutes les entreprises dans leur transformation digitale</HeadH2>
                </HeadingSection>
                <SubTitle>
                    On travaille avec vous !
                </SubTitle>
                <Paragraphe>Main dans la main, nous d??veloppons ensemble la strat??gie digitale qui convient le mieux ?? vos besoins, vos objectifs et vos clients finaux. Par ailleurs, on se d??finit comme votre partenaire plus que votre prestataire. Notre mission ne s'arr??te pas l?? o?? la prestation s'ach??ve, mais plut??t l?? o?? le commence !</Paragraphe>
            </Part>
            <Part>
                <Content>
                    <ContentCol>
                        <h2>Pr??t ?? d??velopper votre visibilit?? en ligne ?</h2>
                        <p>Si vous n'avez pas peur de trouver plus de clients et de d??velopper votre chiffre d'affaires, alors on a des choses ?? faire ensemble ????. On vous propose un rendez-vous gratuit pour vous donner nos astuces et nos conseils sur votre strat??gie digitale. Sans engagement bien entendu ! Pour cela, il ne reste plus qu'?? r??server un cr??neau.</p>
                        <ButtonSecondary>
                            <Link id="rdv-calendly" link="https://calendly.com/tristantornatore/consulting-gratuit">R??servez un cr??neau gratuit<img src={Fleche} alt="revontuli-agence-digitale-caen-fleche-droite" width="25px" /></Link>
                        </ButtonSecondary>
                    </ContentCol>
                    <ContentCol className="accompagnement">
                        <h3>Premier accompagnement digital gratuit</h3>
                        <p>Les premiers conseils, on vous les offre. Profitez de notre accompagnement gratuit</p>
                        <ul>
                            <li>Dur??e de 30 minutes</li>
                            <li>Par Visio / Chat ou T??l??phone</li>
                            <li>Sans engagement ni obligation d'achat</li>
                        </ul>
                        <h4>Ensemble, nous pouvons voir :</h4>
                        <ul>
                            <li>Les performances de votre compte Google Ads</li>
                            <li>Le bon fonctionnement de votre Google Analytics</li>
                            <li>Les performances de votre site</li>
                            <li>Des conseils sur votre r??f??rencement naturel</li>
                            <li>D??couvrir de nouveaux outils</li>
                            <li>Et bien plus encore ! ????</li>
                        </ul>
                    </ContentCol>
                </Content>
            </Part>

        </Section>
    )
}

export default connect(Home);



const Section = styled.div`
    width: 100%;
`

const Heading = styled.header`
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #184759;
    color: #fff;
    text-align: center;
    h1 {
        color: #fff;
        font-size: 5em;
    }
    p {
        font-weight: 300;   
        font-size: 1.5em;
        max-width: 600px;
        line-height: 1.6em;
    }
    @media (max-width: 1500px) {
        h1 {
            font-size: 3em;
        }
        p {
            max-width: 400px;
            font-size: 1.2em;
        }
    }
`

const LinkBrut = styled.div`
    margin: 80px 0;
    font-size: 2em;
    font-family: 'Londrina Solid', cursive;
    color: #184759;
    display: inline-block;
    position: relative;
    & > a {
        border-bottom: 10px solid #FDA05A;
    }
`

const BodySection = styled.div`
    padding: 80px 10%;
    text-align: center;
    position: relative;
    & > img {
        border-radius: 5px;
        box-shadow: 10px 10px 0px #F28241;
        max-width: 100%;
    }
`

const Button = styled.button `
    transition: all 0.2s;
    background-color: #FDA05A;
    box-shadow: 4px 5px 0px #F28241;
    text-align: center;
    padding: 20px 40px;
    border: none;
    color: #fff;
    margin-bottom: 160px;
    font-size: 1.5em;
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

const Part = styled.div`
    padding: 80px 10%;
    background-color: ${props => props.color || "#FCF8F0"};
`
const HeadingSection = styled.div`
    text-align: center;
    & > h2 {
        margin-bottom: 80px;
    }
    & > h3 {
        font-family: 'Nunito', sans-serif;
        font-size: 1.8em;
        color: #102040;
        font-weight: 700;
        margin: 40px auto;
        max-width: 700px;
    }
    & > p {
        color: #1E1C1A;
        margin: 0 auto;
        max-width: 700px;
    }
    @media (max-width: 767px) {
        h2 {
            font-size: 3em;
        }
        p {
            font-size: 18px;
        }
    }
`

const Prestation = styled.div` 

        display: flex;
        flex-wrap: no-wrap;
        justify-content: space-between;

    & > div  {
    }
    & > div > h2 {
        color: #fff;
        font-size: 2.4em;
    }
    & > div > div > h3 {
        font-size: 1.8em;
        color: #fff;
        font-weight: 700;
        margin: 40px auto;
        max-width: 700px;
    }
    & > div > div >  p {
        color: #fff;
        margin: 0 auto;
        max-width: 700px;
    }
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`

const HeaderPrestation = styled.div`
    width: 30%;
    @media (max-width: 767px) {
        width: 100%;
        text-align: center;
    }
`

const PrestationItems = styled.div`
    display: flex;
    width: 66%;
    flex-wrap: wrap;
    @media (max-width: 767px) {
        justify-content: center;
        width: 100%!important;
        text-align: center;
    }
`

const LinkStyled = styled.div`
    margin-top: 20px;
    color: #fff;
    font-size: 1.2em;
    & > a {
        border-bottom: 3px solid #FDA05A;
        padding-bottom: 5px;
    }
`

const Item = styled.div`
    padding-right: 40px;
    margin-bottom: 40px;
    width: 45%;
    & > h3 {
        font-family: 'Nunito', arial;
        margin-bottom: 20px!important;
        font-size: 1.3em!important;
    }
    & > p {
        font-size: 1em;
    }
    & > img {
        max-width: 200px;
    }
    @media (max-width: 767px) {
        padding-right: 0px;
        width: 100%;
        margin-bottom: 80px;
        &:last-child {
            margin-bottom: 0px; 
        }
    }
`

const SubTitle = styled.p`
    text-align: center;
    font-family: 'Londrina Solid', arial; 
    font-size: 2.2em;
    color: #FDA05A;
`

const Paragraphe = styled.p`
    max-width: 800px;
    text-align: center;
    margin: 40px auto;
`

const HeadTag = styled.p`
    font-size: 14px;
    font-weight: 900;
    color: #FDA05A!important;
    border: 3px solid #FDA05A;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 50px;
`

const HeadH2 = styled.h2`
    max-width: 800px;
    margin: 40px auto;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > .accompagnement {
        padding: 60px;
        margin-left: 60px;
        max-width: 30%;
        border-radius: 15px;
        background-color: #fff;
        box-shadow: 8px 10px 0px rgba(0,0,0,0.08);
        & > h4 {
            font-size: 1.4em;
        }
    }
    @media (max-width: 767px) {
        flex-wrap: wrap;
        & > .accompagnement {
            padding: 40px;
            margin-left: 0px;
            max-width: 100%;
            margin-top: 80px;
        }
    }
`

const ContentCol = styled.div`
    width: 50%;
    @media (max-width: 767px) {
        width: 100%;
        & > h2 {
            font-size: 3em;
        }
    }
`

const Revontuli = styled.div`
    position: relative; 
    height: 250px;
    & > p {
        top: 60px;
        z-index: 0;
        font-family: 'Londrina Solid', arial;
        color: #fff;
        right: 50%;
        transform: translateX(50%);
        font-size: 13em;
        margin: 0;
        padding: 0;
        line-height: 0.35em;
        display: block;
        position: absolute;
    }
    & > h2 {
        width: 100%;
        top: 60px;
        right: 50%;
        transform: translateX(50%);
        margin: 0;
        z-index: 99;
        position: absolute;
    }
    @media (max-width: 767px) {
        height: 170px;
        p {
            padding-top: 40px;
            font-size: 6em!important;
        }
    }
`