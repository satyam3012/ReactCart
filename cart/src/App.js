import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

import React, { useState } from "react";

function App() {
  const productList = [
    {
      price: 30000,
      name: "One Plus",
      quantity: 0,
    },
    {
      price: 40000,
      name: "One Plus 8T",
      quantity: 0,
    },
  ];

  let [products, setProductList] = useState(productList);

  const incrementQuantity = (index) => {
    let newProductList = [...products];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
