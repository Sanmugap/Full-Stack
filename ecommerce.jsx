import React, { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Mobile Phone", price: 15000 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="ecommerce">
      <h2>Product List</h2>

      <div>
        {products.map((item) => (
          <div key={item.id}>
            <p><b>{item.name}</b></p>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <hr />
          </div>
        ))}
      </div>

      <h3>Cart</h3>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
