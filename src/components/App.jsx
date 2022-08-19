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
    <BrowserRouter>
      <Nav number={added} reset={setAdded} />
      {/* Trigger backdrop when product is clicked */}
      <ProductInfo
        handleChange={setAdded}
        showModal={viewProduct}
        setShowModal={setViewProduct}
      />
      {viewProduct && (
        <Backdrop showProductModal={viewProduct} setModal={setViewProduct} />
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
