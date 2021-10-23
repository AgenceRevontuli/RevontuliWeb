import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./templates/Home";
import Footer from "./footer";
import Prestations from './templates/Prestations';
import HeaderSecondary from './HeaderSecondary';
import Startups from "./templates/Startups";
import Formations from "./templates/Formations";
import Agence from "./templates/Agence";
import Contact from "./templates/Contact";
import post from "./post";


/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="fr" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Switch>
          <Header when={data.isHome} />
          <HeaderSecondary when={!data.isHome} />
        </Switch>

      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Contact when={data.route === "/nous-contacter/"} />
          <Home when={data.isHome} />
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Prestations when={data.isPrestations} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
          <Startups when={data.isStartups} />
          <Formations when={data.isFormations} />
          <Agence when={data.isAgence} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`

@import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Londrina+Solid:wght@300&family=Nunito:wght@300;400;600;700&display=swap');

  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  p {
    font-family: 'Nunito', sans-serif;
    font-size: 1.4em;
    line-height: 1.8em;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Londrina Solid', cursive;
    color: #184759;
  }
  h2 {
    font-weight: 200;
    font-size: 5em;
    color: #184759;
  }
  h3 {
    font-size: 2.5em;
  }
  .submenu {
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
    transform: translateY(2%);
    top: 40px;
    padding: 30px;
    z-index: 1;
    position: absolute;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 4px 10px 25px rgba(0,0,0,0.08);
  }
  .visible {
    transform: translateX(0%);
    opacity: 1;
    visibility: visible;
  }

  .moho1, .moho2 {
    font-size: 15em;
    position: absolute;
    color: #FDA05A;
    font-family: 'Londrina Solid', cursive;
    line-height: 0px;
  }

  .moho1 {
    top: 80px;
    left: -40px;
    transform: rotateZ(
      -90deg
      );
  }
  .moho2 {
    bottom: 80px;
    right: -40px;
    transform: rotateZ(
      90deg
      );
  }
  .section {
    width: 100%;
  }
  @media (max-width: 767px) {
    .moho1, .moho2 {
      font-size: 5em;
    }
  }
  @media screen and (min-width: 1000px) and (max-width: 1520px) {
    .moho1, .moho2 {
      font-size: 8em;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 999px) {
    .moho1, .moho2 {
      font-size: 6em;
    }
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #184759;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;