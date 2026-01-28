import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000";

export default function App() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        if (data.length > 0) {
          setSelectedProduct(data[0]._id);
        }
      });
  }, []);

  const placeOrder = async () => {
    setMessage("");

    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: selectedProduct,
        quantity: Number(quantity),
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(data.message);
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div className="container">
      <h2>Mini Grocery Order</h2>

      <label>Product</label>
      <select
        value={selectedProduct}
        onChange={e => setSelectedProduct(e.target.value)}
      >
        {products.map(p => (
          <option key={p._id} value={p._id}>
            {p.name} — ₹{p.price} (Stock: {p.stock})
          </option>
        ))}
      </select>

      <label>Quantity</label>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />

      <button onClick={placeOrder}>Place Order</button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}
