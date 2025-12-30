import React, { useState } from "react";

function App() {
  const [category, setCategory] = useState("all");

  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Headphones", category: "Electronics" },
    { id: 3, name: "T-shirt", category: "Clothing" },
    { id: 4, name: "Jeans", category: "Clothing" },
    { id: 5, name: "Book", category: "Books" }
  ];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="product">
      <h2>Product Browser</h2>

      <div>
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("Electronics")}>Electronics</button>
        <button onClick={() => setCategory("Clothing")}>Clothing</button>
        <button onClick={() => setCategory("Books")}>Books</button>
      </div>

      <hr />

      {filteredProducts.length === 0 ? (
        <p>No products in this category</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - <i>{product.category}</i>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
