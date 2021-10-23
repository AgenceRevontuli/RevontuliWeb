import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import NavSecondary from "./navSecondary";
import MobileMenuDark from "./darkmenu";

const HeaderSecondary = ({ state }) => {
    const data = state.source.get("acf-options-page");
  return (
    <>
      <Container>
        <StyledLink link="/">
            <img 
                src={data.acf.logoLightMode['url']} 
                alt={data.acf.logoLightMode['alt']} 
                width={data.acf.logoWidth}
            />
        </StyledLink>
        <MobileMenuDark />
        <NavSecondary />
      </Container>
      
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(HeaderSecondary);

const Container = styled.header`
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
  background-color: #FCF8F0;
  @media (max-width: 767px){
    flex-wrap: wrap;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  justify-item: flex-start;
  @media (max-width: 767px){
  }
`;