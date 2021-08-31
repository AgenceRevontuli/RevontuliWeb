import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
    const data = state.source.get("acf-options-page");
  return (
    <>
      <Container>
        <StyledLink link="/">
            <img 
                src={data.acf.logoDarkMode['url']} 
                alt={data.acf.logoDarkMode['alt']} 
                width={data.acf.logoWidth}
            />
        </StyledLink>
        <MobileMenu />
        <Nav />
      </Container>
      
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  z-index: 99;
  width: 100%;
  box-sizing: border-box;
  padding: 24px 10%;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  & > a {
    color: #184759!important;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;