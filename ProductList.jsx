import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 250,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 300,
    image: "https://via.placeholder.com/150"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Plants</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
