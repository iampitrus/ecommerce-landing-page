import React from "react";
import styled from "styled-components";

const ButtonGroup = ({ handleChange, count }) => {
  const decrease = () => count > 0 && handleChange(count - 1);
  const increase = () => handleChange(count + 1);
  return (
    <ProductNumber>
      <button onClick={decrease}>
        <svg
          width="12"
          height="4"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
              id="a"
            />
          </defs>
          <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
        </svg>
      </button>
      <button className="count">{count}</button>
      <button onClick={increase}>
        <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
              id="b"
            />
          </defs>
          <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
        </svg>
      </button>
    </ProductNumber>
  );
};

const ProductNumber = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Lightgrayishblue);
  border-radius: 6px;
  button {
    padding: 15px 20px;
    cursor: pointer;
    background: none;
    color: var(--Black);
    border: none;
    &:hover use {
      opacity: 0.6;
    }
  }
  .count {
    cursor: text;
  }
`;

export default ButtonGroup;
