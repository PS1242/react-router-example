import React from "react";
import useFetch from "../useFetch";

function ShopItem({ match }) {
  const url = `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`;
  const raw = useFetch(url, "");
  let image = "";
  if (raw.data) image = raw.data.item.images;

  return (
    <div>
      <img src={image.icon} alt="item-img"></img>
    </div>
  );
}

export default ShopItem;
