import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    setItems(items.data.slice(0, 10));
  };
  return (
    <div>
      <h2 className="page-heading">Welcome to shop</h2>
      {items.map((item) => {
        return (
          <p key={item.itemId} className="shop-items">
            <Link to={`/shop/${item.itemId}`} className="shop-items-list">
              {item.item.name}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default Shop;
