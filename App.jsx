import { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      {!showProducts ? (
        <div className="background-image">
          <div className="landing">
            <h1>Paradise Nursery</h1>
            <button onClick={() => setShowProducts(true)}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;
