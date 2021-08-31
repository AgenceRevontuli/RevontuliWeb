import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";

const MenuModal = ({ state }) => {
    const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {items.map((item) => {
            if (!item.child_items) {
                return (
                    <MenuLink key={item.ID}>
                        <Link link={item.url}>{item.title}</Link>
                    </MenuLink>
                );
            } else {
                const childItems = item.child_items;
                return (
                    <NavItemWithChild key={item.ID}>
                    <MenuLink>
                        <Link link={item.url}>{item.title}</Link>
                    </MenuLink>
                    <ChildMenu>
                        {childItems.map((childItem) => {
                        return (
                            <NavItem key={childItem.ID}>
                            <Link link={childItem.url}>{childItem.title}</Link>
                            </NavItem>
                        );
                        })}
                    </ChildMenu>
                    </NavItemWithChild>
                 );
            }
        })}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #1f38c5;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
`;

const MenuLink = styled.li`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

const NavItemWithChild = styled.div`

`;

const ChildMenu = styled.div`

`;

const NavItem = styled.div`

`;

export default connect(MenuModal);