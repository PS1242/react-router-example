import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch.js";

function Shop() {
  const url = "https://fortnite-api.theapinetwork.com/upcoming/get";
  const raw = useFetch(url, []);
  let items = [];
  if (raw.data) items = raw.data.splice(0, 10);

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
