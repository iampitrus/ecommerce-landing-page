import React, { useState } from "react";
import styled from "styled-components";
import ButtonGroup from "./buttonGroup";
import products from "./products";

function ProductView({ showArrows, setShowModal, children }) {
  const [active, setActive] = useState(0);
  return (
    <Container>
      {/* Big image */}
      <div className="main-img" style={{ position: "relative" }}>
        {children}
        {showArrows && (
          <div
            className="previous"
            onClick={() =>
              active === 0
                ? setActive(products.length - 1)
                : setActive(active - 1)
            }
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        )}
        {/* This is the dynamic main image */}
        <img
          onClick={(e) => {
            e.stopPropagation();
            window.innerWidth > 900 && setShowModal(true);
          }}
          src={products[active].mainUrl}
          alt=""
        />
        {showArrows && (
          <div
            className="next"
            onClick={() =>
              active === products.length - 1
                ? setActive(0)
                : setActive(active + 1)
            }
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {/* The thumbnails (Small images) */}
      <div className="thumbnails">
        {products.map((thumbs) => (
          <img
            onClick={() => setActive(thumbs.id)}
            // Apply styles to the clicked thumbnail-img
            className={active === thumbs.id ? "active-img" : "inactive"}
            key={thumbs.id}
            src={thumbs.thumbUrl}
            alt="sneakers"
          />
        ))}
      </div>
    </Container>
  );
}

function ProductInfo({ handleChange, showModal, setShowModal, showArrows }) {
  const [count, setCount] = useState(0);
  return (
    <InfoContainer>
      <ProductView
        showModal={showModal}
        setShowModal={setShowModal}
        showArrows={showArrows}
      />
      <div className="details">
        <h3 className="heading"> Sneaker Company</h3>
        <h1>
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p>
          These low-profile sneakers are your perfect casual wear <br />{" "}
          companion. Featuring a durable rubber outer sole, they’ll withstand
          everything the weather can offer.
        </p>
        <div className="price">
          <div>
            <h2 className="current-price">$125.00</h2>
            <h3 className="discount">50%</h3>
          </div>
          <h3 className="old-price">$250.00</h3>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <ButtonGroup handleChange={setCount} count={count} />
          <button onClick={() => handleChange(count)} className="add-cart">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </InfoContainer>
  );
}

const Container = styled.div`
  width: 350px;
  .main-img img {
    border-radius: 20px;
    width: 100%;
    aspect-ratio: 1;
  }
  .previous:hover svg path,
  .next:hover svg path {
    stroke: var(--Orange);
  }
  .previous {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    aspect-ratio: 1;
    width: 44px;
    background-color: var(--White);
    border-radius: 100%;
    top: 40%;
    left: -22px;
    z-index: 2;
    @media (max-width: 900px) {
      left: 1%;
      scale: 0.8;
    }
  }
  .next {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    aspect-ratio: 1;
    width: 44px;
    background-color: var(--White);
    border-radius: 100%;
    top: 40%;
    right: -22px;
    @media (max-width: 900px) {
      right: 1%;
      scale: 0.8;
    }
  }

  .thumbnails {
    display: flex;
    max-width: 350px;
    align-items: center;
    justify-content: space-between;
    margin: 1rem auto;
    .active-img {
      position: relative;
      border: 2px solid var(--Orange);
    }
  }
  .thumbnails img {
    position: relative;
    width: 75px;
    border-radius: 10px;
    &:hover {
      border: 2px solid var(--Orange);
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    .thumbnails {
      display: none;
    }
    .main-img img {
      border-radius: 0;
      left: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      margin-bottom: 1rem;
      right: 50%;
      width: 100vw;
      position: relative;
    }
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  margin-top: 4rem;
  @media (max-width: 900px) {
    display: block;
    margin: 0;
  }
  .details {
    width: 100%;
    h3.heading {
      margin-bottom: 1rem;
      text-transform: uppercase;
      color: var(--Orange);
    }

    p {
      color: var(--Darkgrayishblue);
      margin-block: 1.6rem;
      line-height: 1.5;
    }
    .price {
      @media (max-width: 900px) {
        display: flex;
        justify-content: space-between;
      }
    }
    h2.current-price {
      display: inline-block;
      margin-right: 2rem;
      line-height: 1.5;
    }
    h3.discount {
      display: inline;
      border-radius: 5px;
      padding: 5px 10px;
      background-color: var(--PaleOrange);
      color: var(--Orange);
    }
    h3.old-price {
      margin-top: 0.6rem;
      margin-bottom: 2rem;
      color: hsl(220, 14%, 75%);
    }
    .add-cart {
      position: relative;
      padding-block: 15px;
      background-color: var(--Orange);
      color: #fff;
      border: none;
      border-radius: 10px;
      display: flex;
      width: 15rem;
      justify-content: center;
      align-items: center;
      svg {
        margin-right: 1rem;
      }
      @media (max-width: 600px) {
        width: 100%;
      }
      &:hover::before {
        content: "";
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--PaleOrange);
      }
    }
  }
`;

export default ProductInfo;
export { ProductView };
