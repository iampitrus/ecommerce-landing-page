import React, { useState } from "react";

import styled from "styled-components";
import ButtonGroup from "./buttonGroup";

function ProductView() {
  const products = [
    {
      id: 1,
      mainUrl: "./images/image-product-1.jpg",
      thumbUrl: "./images/image-product-1-thumbnail.jpg",
    },
    {
      id: 2,
      mainUrl: "./images/image-product-2.jpg",
      thumbUrl: "./images/image-product-2-thumbnail.jpg",
    },
    {
      id: 3,
      mainUrl: "./images/image-product-3.jpg",
      thumbUrl: "./images/image-product-3-thumbnail.jpg",
    },
    {
      id: 4,
      mainUrl: "./images/image-product-4.jpg",
      thumbUrl: "./images/image-product-4-thumbnail.jpg",
    },
  ];

  return (
    <Container>
      <img src="./images/image-product-1.jpg" alt="" />
      <div>
        {products.map((thumbs) => (
          <img key={thumbs.id} id={thumbs.id} src={thumbs.thumbUrl} alt="" />
        ))}
      </div>
    </Container>
  );
}

function ProductInfo({ handleChange }) {
  const [count, setCount] = useState(0);
  return (
    <InfoContainer>
      <ProductView />
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
        <h2 className="current-price">$125.00</h2>
        <h3 className="discount">50%</h3>
        <h3 className="old-price">$250.00</h3>
        <div style={{ display: "flex", gap: 20 }}>
          <ButtonGroup handleChange={setCount} count={count} />
          <button onClick={() => handleChange(count)} className="add-cart">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fill-rule="nonzero"
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
  /* margin-top: 4rem; */
  width: 350px;

  & > img {
    border-radius: 20px;
    width: 350px;
    aspect-ratio: 1;
  }

  div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    img {
      width: 75px;
      border-radius: 10px;
    }
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-top: 4rem;
  .details {
    width: 100%;
    h3.heading {
      margin-bottom: 1rem;
      text-transform: uppercase;
      color: hsl(26, 100%, 55%);
    }

    p {
      color: hsl(219, 9%, 45%);
      margin-block: 1.6rem;
      line-height: 1.5;
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
      background-color: hsl(25, 100%, 94%);
      color: hsl(26, 100%, 55%);
    }
    h3.old-price {
      margin-top: 0.6rem;
      margin-bottom: 2rem;
      color: hsl(220, 14%, 75%);
    }
    .add-cart {
      position: relative;
      padding: 15px 5rem;
      background-color: hsl(26, 100%, 55%);
      color: #fff;
      border: none;
      border-radius: 10px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 1rem;
      }
      &:hover::before {
        content: "";
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: hsl(25, 100%, 94%);
      }
    }
  }
`;

export default ProductInfo;
export { ProductView };
