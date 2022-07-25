import React from "react";
import styled from "styled-components";

const ButtonGroup = ({ handleChange, count }) => {
  const decrease = () => count > 0 && handleChange(count - 1);
  const increase = () => handleChange(count + 1);
  return (
    <ProductNumber>
      <button onClick={decrease}>
        <img src="./images/icon-minus.svg" alt="" />
      </button>
      <button className="count">{count}</button>
      <button onClick={increase}>
        <img src="./images/icon-plus.svg" alt="" />
      </button>
    </ProductNumber>
  );
};

const ProductNumber = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(223, 64%, 98%);
  border-radius: 6px;
  button {
    padding: 15px 20px;
    cursor: pointer;
    background: none;
    color: black;
    border: none;
  }
  .count {
    cursor: text;
  }
`;

export default ButtonGroup;
