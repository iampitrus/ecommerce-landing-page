import styled from "styled-components";

const CartDialogue = ({ price, number, reset }) => {
  const total = price * number;

  return (
    <Card style={number === 0 ? { height: "160px" } : { height: "auto" }}>
      <h3 className="title">Cart</h3>
      {number === 0 ? (
        <h3 className="empty-cart">Your cart is empty</h3>
      ) : (
        <>
          <div className="content">
            <img
              className="product"
              src="./images/image-product-1-thumbnail.jpg"
              alt="product"
            />
            <p>
              Fall Limited Edition Sneakers <br /> {`$${price} x ${number}`}{" "}
              <span>{`$${total}`}</span>{" "}
            </p>
            <img
              onClick={() => reset(0)}
              src="./images/icon-delete.svg"
              alt=""
            />
          </div>
          <button>Checkout</button>
        </>
      )}
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  background-color: var(--White);
  min-width: 340px;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 20px #68707d7e;
  .title {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--Lightgrayishblue);
  }
  .empty-cart {
    position: absolute;
    top: 50%;
    left: 25%;
    color: var(--Darkgrayishblue);
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 1rem;
    gap: 0.5rem;
    p {
      line-height: 1.5;
      color: var(--Darkgrayishblue);
      span {
        font-weight: 700;
        color: var(--Black);
      }
    }
    .product {
      border-radius: 3px;
      width: 45px;
    }
  }
  button {
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
    color: var(--White);
    background-color: var(--Orange);
    padding: 1rem;
    border: none;
  }
`;
export default CartDialogue;
