import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const NavSecondary = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

const [isHovering, setIsHovering] = useState(false);
const handleMouseEnter = (e) => {
    setIsHovering(true)
}
const handleMouseLeave = (e) => {
    setIsHovering(false)
}
const handleOnClick = (e) => {
    setIsHovering(false)
}

const onToggleOpener = () => {
    return`
        ${isHovering ? "submenu visible" : "submenu"}
    `
}

  return (

    <NavContainer>
      {items.map((item) => {
        if (!item.child_items) {
          return (
            <NavItem key={item.ID}>
              <Link link={item.url}>{item.title}</Link>
            </NavItem>
          );
        } else {
          const childItems = item.child_items;
          return (
            <NavItemWithChild key={item.ID} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <NavItem>
                <Link link={item.url}>{item.title}</Link>
              </NavItem>
              <div className={onToggleOpener()}>
                <ChildMenu>
                    {childItems.map((childItem) => {
                    return (
                                <ChildNavItem key={childItem.ID} onClick={handleOnClick}>
                                    <Link link={childItem.url} >{childItem.title}</Link>
                                </ChildNavItem>
                    );
                    })}
                </ChildMenu>
              </div>
            </NavItemWithChild>
          );
        }
      })}
    </NavContainer>
  );
};


export default connect(NavSecondary);

const NavContainer = styled.nav`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  /* overflow-x: auto; */
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #184759;
  font-size: 1.2em;
  box-sizing: border-box;
  font-family: 'Londrina Solid', cursive;
  flex-shrink: 0;
  & > a {
    display: inline-block;
    line-height: 2em;
  }
  &:last-of-type {
    transition: all 0.2s;
    margin-right: 0;
    background-color: #FDA05A;
    box-shadow: 4px 5px 0px #F28241;
    text-align: center;
    padding: 5px 20px;
    color: #fff;
    border-radius: 3px;
    &:after {
      display: inline-block;
      width: 24px;
    }
    &:hover {
        transform: scale(1.08);
        box-shadow: 0px 0px 0px #F28241;
    }
  }
`;
/**
 * Styling of nav elements
 */
const NavItemWithChild = styled.div`
`;
const ChildMenu = styled.div`
  a {
      color: #C4C4C4;
      transition: all 0.2s;
  }
  a:hover {
    color: #1E1C1A;
}
`;
const ChildNavItem = styled.div`
padding: 0;
margin: 0 16px;
color: #000;
font-size: 1em;
box-sizing: border-box;
flex-shrink: 0;
& > a {
  display: inline-block;
  line-height: 2.8em;
    }
}
`;