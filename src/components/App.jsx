import "../index.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./navigation";
import ProductInfo from "./productInfo";
import Footer from "./Footer";
import Backdrop from "./Modal/Backdrop";

function App() {
  // This controls the number of items added to the cart
  const [added, setAdded] = useState(0);
  // This controls the click on the main image
  const [viewProduct, setViewProduct] = useState(false);
  return (
    // How to increase the size of the viewed image with it not affecting that of the initial one on the screen before and add the functionality to the carousel buttons navigation
    <BrowserRouter>
      <Nav number={added} reset={setAdded} />
      {viewProduct && (
        <Backdrop showProductModal={viewProduct} setModal={setViewProduct} />
      )}
      <ProductInfo
        handleChange={setAdded}
        showModal={viewProduct}
        setShowModal={setViewProduct}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
