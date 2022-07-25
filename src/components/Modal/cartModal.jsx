import styled from "styled-components";

const CartDialogue = ({ price, number }) => {
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
              Fall Limited Edition Sneakers {`$${price} x ${number}`}{" "}
              <span>{`$${total}`}</span>{" "}
            </p>
            <img src="./images/icon-delete.svg" alt="" />
          </div>
          <button>Checkout</button>
        </>
      )}
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  background-color: #fff;
  width: 340px;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 20px #68707d7f;
  .title {
    padding-bottom: 1rem;
    border-bottom: 1px solid hsl(223, 64%, 98%);
  }
  .empty-cart {
    position: absolute;
    top: 50%;
    left: 25%;
    color: hsl(219, 9%, 45%);
  }
  .content {
    display: flex;
    align-items: center;
    margin-block: 1rem;
    gap: 0.5rem;
    p {
      color: hsl(219, 9%, 45%);
      span {
        font-weight: 700;
        color: #000;
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
    color: #fff;
    background-color: hsl(26, 100%, 55%);
    padding: 1rem;
    border: none;
  }
`;
export default CartDialogue;
