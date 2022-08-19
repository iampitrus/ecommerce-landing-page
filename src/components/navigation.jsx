import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CartDialogue from "./Modal/cartModal";
import ToggleButton from "./ToogleButton";
import Backdrop from "./Modal/Backdrop";
function Nav({ number, reset }) {
  const [toggleDialogue, settoggleDialogue] = useState(false); // This toggles the cartbox
  const [showNav, setshowNav] = useState(false); // This controls the open and close of the nav for small screen size only
  // Styled Nav

  return (
    <Header>
      {/* Navigation */}
      <div className="pages-link">
        <ToggleButton setNav={() => setshowNav(true)} />
        <a href="/">
          <img src="./images/logo.svg" alt="logo" />
        </a>
        {showNav && <Backdrop />}
        <PrimaryNavigation
          className={showNav ? "primary-nav show" : "primary-nav"}
        >
          <svg
            onClick={() => setshowNav(false)}
            className="close-btn"
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
          <NavLink to={"/collection"}>Collections</NavLink>
          <NavLink to={"/men"}>Men</NavLink>
          <NavLink to={"/women"}>Women</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </PrimaryNavigation>
      </div>
      <div className="user-link">
        {/* Cart */}
        <div style={{ position: "relative" }}>
          <img
            onClick={() => settoggleDialogue(!toggleDialogue)}
            className="cart"
            src="./images/icon-cart.svg"
            alt="shop"
          />
          {number > 0 && <NotifyBtn>{number}</NotifyBtn>}
          {toggleDialogue && (
            <Checkout>
              <CartDialogue reset={reset} price={125.0} number={number} />
            </Checkout>
          )}
        </div>
        <img className="avatar" src="./images/image-avatar.png" alt="avatar" />
      </div>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  background: transparent;
  height: clamp(4rem, 10vw, 6rem);
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--Lightgrayishblue);
  .pages-link {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .user-link {
    display: flex;
    align-items: center;
    & img {
      cursor: pointer;
    }
    .cart:hover {
      color: var(--Veryblue);
    }
  }
  .avatar {
    width: clamp(25px, 10vw, 45px);
    margin-left: min(2.5rem, 5vw);
    &:hover {
      border-radius: 50%;
      border: 1.5px solid var(--Orange);
    }
  }
`;

const PrimaryNavigation = styled.nav`
  display: flex;
  margin-left: 4rem;
  gap: 1.8rem;
  a {
    color: hsl(219, 9%, 45%);
    font-weight: 400;
    font-size: 0.9rem;
    padding-block: 2.4rem;
    &.active {
      border-bottom: 3px solid var(--Orange);
      color: var(--Veryblue);
    }
  }
  .close-btn {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    inset: 0 30% 0 -65px;
    padding: 6rem 40px;
    flex-direction: column;
    background: var(--White);
    a {
      padding: 0;
      font-weight: 700;
    }
    .close-btn {
      display: block;
      position: absolute;
      top: 30px;
      left: 40px;
    }
  }
`;

const NotifyBtn = styled.button`
  background-color: var(--Orange);
  color: #fff;
  position: absolute;
  border: none;
  border-radius: 5px;
  padding: 0 5px;
  font-size: 8px;
  top: -3px;
  right: -2px;
`;

const Checkout = styled.div`
  position: absolute;
  top: 3rem;
  z-index: 1999;
  left: -190px;
  @media (max-width: 900px) {
    left: -250px;
  }
`;

export default Nav;
