import styled from "styled-components";

function App() {
  return (
    <>
      <ProductNumber class="numberOfProducts">
        <button>-</button>
        <button>0</button>
        <button>+</button>
      </ProductNumber>

      {/* Collections
  Men
  Women
  About
  Contact

  Sneaker Company

  Fall Limited Edition Sneakers

  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.

  $125.00
  50%
  $250.00

  0
  Add to cart  */}

      <footer class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  );
}

const ProductNumber = styled.div`
  padding: 10px;
  background-color: antiquewhite;
  display: inline-block;
  border-radius: 4px;
  button {
    padding-inline: 5px;
    background: none;
    border: none;
  }
  button:hover {
    background-color: aqua;
  }
  button:nth-child(2) {
    padding-inline: 20px;
  }
`;

export default App;
