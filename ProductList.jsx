import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";

const plantCategories = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 250, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Snake Plant", price: 300, image: "https://via.placeholder.com/150" },
  ],
  Outdoor: [
    { id: 3, name: "Rose", price: 200, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Hibiscus", price: 280, image: "https://via.placeholder.com/150" },
  ],
  Medicinal: [
    { id: 5, name: "Tulsi", price: 150, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Mint", price: 120, image: "https://via.placeholder.com/150" },
  ],
};

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Plants</h2>

      {Object.keys(plantCategories).map((category) => (
        <div key={category}>
          <h3>{category} Plants</h3>

          <div style={{ display: "flex", gap: "20px" }}>
            {plantCategories[category].map((plant) => (
              <div
                key={plant.id}
                style={{ border: "1px solid #ccc", padding: "10px" }}
              >
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>
                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <br />
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default ProductList;


