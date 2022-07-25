import "../index.css";
import React, { useState } from "react";
import Nav from "./navigation";
import { BrowserRouter } from "react-router-dom";
import ProductInfo from "./productInfo";
import Footer from "./Footer";

function App() {
  const [added, setAdded] = useState(0);
  return (
    <BrowserRouter>
      <Nav number={added} />
      <ProductInfo handleChange={setAdded} count={added} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
