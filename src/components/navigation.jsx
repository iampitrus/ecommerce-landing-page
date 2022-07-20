import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CartDialogue from "./cartModal";
function Nav() {
  const [showCheckout, setShowCheckout] = useState(false);
  return (
    <Header>
      <div className="pages-link">
        <a href="/">
          <img src="./images/logo.svg" alt="logo" />
        </a>
        <ToggleButton />
        <PrimaryNavigation className="primary-navigation">
          <NavLink to={"/collection"}>Collections</NavLink>
          <NavLink to={"/men"}>Men</NavLink>
          <NavLink to={"/women"}>Women</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </PrimaryNavigation>
      </div>
      <div className="user-link">
        <img
          onClick={() => setShowCheckout(!showCheckout)}
          className="cart"
          src="./images/icon-cart.svg"
          alt="shop"
        />
        <img className="avatar" src="./images/image-avatar.png" alt="avatar" />
        <NotifyBtn>3</NotifyBtn>
        {showCheckout && (
          <Checkout>
            <CartDialogue />
          </Checkout>
        )}
      </div>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  background: transparent;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsl(223, 64%, 98%);
  .pages-link {
    display: flex;
    align-items: center;
  }
  .user-link {
    display: flex;
    align-items: center;
    & img {
      cursor: pointer;
    }
    .cart:hover {
      color: hsl(220, 13%, 13%);
    }
  }
  .avatar {
    width: 45px;
    margin-left: 2.5rem;
    &:hover {
      border-radius: 50%;
      border: 1.5px solid hsl(26, 100%, 55%);
    }
  }
`;
const PrimaryNavigation = styled.nav`
  margin-left: 2rem;
  a {
    color: hsl(219, 9%, 45%);
    font-weight: 400;
    font-size: 0.9rem;
    margin-inline: 0.9rem;
    padding-block: 2.2rem;
    &.active {
      border-bottom: 3px solid hsl(26, 100%, 55%);
      color: hsl(220, 13%, 13%);
    }
  }
  @media (max-width: 375px) {
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    padding: min(30vh, 10rem) 2em;
    flex-direction: column;
    background-color: hsl(0, 0%, 100%);
    transorm: translateX(100%);
  }
`;

const NotifyBtn = styled.button`
  background-color: hsl(26, 100%, 55%);
  color: #fff;
  position: absolute;
  border: none;
  border-radius: 5px;
  padding: 0 5px;
  font-size: 8px;
  top: 2.15rem;
  right: calc(2.5rem + 43px + 10%);
`;

const Checkout = styled.div`
  position: absolute;
  top: 6rem;
  right: 6rem;
`;

const ToggleButton = styled.button`
  display: none;
  @media (max-width: 375px) {
    display: block;
    z-index: 9999;
    background: url("./images/icon-menu.svg");
    background-repeat: no-repeat;
  }
`;

export default Nav;
