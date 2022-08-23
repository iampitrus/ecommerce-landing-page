import "../index.css";
import React, { useState, useEffect } from "react";
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
  // Show arrow when on small screen size
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    window.innerWidth < 900 && setShowArrow(true);
  }, []);
  return (
    <BrowserRouter>
      <Nav number={added} reset={setAdded} />
      <ProductInfo
        handleChange={setAdded}
        showModal={viewProduct}
        setShowModal={setViewProduct}
        showArrows={showArrow}
      />
      {/* Trigger backdrop when product is clicked */}
      {viewProduct && (
        <Backdrop showProductModal={viewProduct} setModal={setViewProduct} />
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
