import React from 'react';
import { connect, styled } from "frontity";
import Link from "./../link";
import Fleche from "./../svg/revontuli-fleche-droite.svg";
import { useState } from 'react';

const Prestations = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const PrestaSteps = page.acf.header.methode;
    const FaqItems = page.acf.faq;
    const [selected, setSelected] = useState(null);
    const toggle = i => {
        if(selected === i) {
            return setSelected(null)
        }
        setSelected(i);
    }

    return (
        <Section>
            <HeaderSection>
                <h1>{page.acf.header.name}</h1>
            </HeaderSection>
            <SubHeader>
                <p className="subtitle">{page.acf.header.heading}</p>
                <p>{page.acf.header.description}</p>
            </SubHeader>
            <Step>
                <h2>{page.acf.header.section2titre}</h2>
                <p>{page.acf.header.section2description}</p>
                <Steps>
                    {PrestaSteps.map((PrestaStep) => {
                        return(
                            <StepBox key={PrestaStep.id}>
                                <h3>{PrestaStep.titre}</h3>
                                <p>{PrestaStep.text}</p>
                            </StepBox>
                        )
                    })
                    }
                </Steps>
                <ButtonSecondary>
                    <Link link={page.acf.cta.link}>{page.acf.cta.txt} <img src={Fleche} alt="revontuli-agence-digitale-caen-fleche-droite" width="25px" /></Link>
                </ButtonSecondary>
            </Step>
            <Faq>
                <FaqMap>
                    <h2>{page.acf.titreFaq}</h2>
                    {FaqItems.map((FaqItem, i) => {
                        return(
                            <FaqContent 
                                className={"question"}
                                key={FaqItem.question}
                            >
                                <div className="title" onClick={() => toggle(i)}>
                                    <h3>{FaqItem.question}</h3>
                                    <span>{selected === i ? "-" : "+"}</span>
                                </div>
                                <div className={selected === i ? "content show" : "content"}>
                                    <div dangerouslySetInnerHTML={{ __html: FaqItem.answer }} />
                                </div>   
                            </FaqContent>
                        )
                    })}
                </FaqMap>
            </Faq>
        </Section>
    )
}

export default connect(Prestations);

const Section = styled.main`
    width: 100%;
    text-align: center;
`

const HeaderSection = styled.div `
    background-color: #FCF8F0;
    text-align: center;
    padding: 80px 10%;
    & > h1 {
        font-size: 3.5em;
    }
`

const SubHeader = styled.div `
    text-align: left;
    padding: 80px 10%;
    & > p {
        max-width: 700px;
        margin: 0 auto;
        font-size: 1.2em;
    }
    & > .subtitle {
        font-weight: 800;
        color: #184759;
        font-size: 2em;
        margin-bottom: 40px;
    }
`

const Step = styled.div`
    padding: 80px 10%;
    text-align: center;
    background-color: #184759;
    color: #fff;
    & > h2, h3, h4 {
        color: #fff;
    }
    @media (max-width: 767px) {
        h2 {
            font-size: 2em;
        }
    }
`

const Steps = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`

const StepBox = styled.div`
    text-align: left;
    width: 28%;
    padding: 30px; 
    & > h3 {
        font-size: 1.5em;
    }
    & > p {
        font-size: 1em;
    }
    @media (max-width: 767px) {
        width: 100%;
        padding: 30px; 
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

const Faq = styled.div`
    padding: 80px 10%;
    background-color: #FCF8F0;
`

const FaqMap = styled.div`
    text-align: left;
    max-width: 700px; 
    margin: 0 auto;
    @media (max-width: 767px) {
        h2 {
            font-size: 2.5em;
            text-align: center;
        }
    }
`
const FaqContent = styled.div`
    background-color: #fff;
    padding: 10px 40px;
    box-shadow: 4px 4px 0px rgba(0,0,0,0.02);
    margin-bottom: 30px;
    .content {
        max-height: 0;
        overflow: hidden;
       }
    .content.show {
        max-height: 9999px;
        height: auto;
        transition: all 0.2s;
    }
   & > div > p {
    font-size: 1em;   
    } 
   & > .title {
       cursor: pointer;
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
   & > .title > h3, span {
    font-size: 1.5em;
   } 
   & > .title span {
    font-family: 'Londrina Solid', cursive;
    font-size: 2.5em;
    color: #FDA05A;
    }
   & > .content p{
    font-size: 1em;  
   }
`