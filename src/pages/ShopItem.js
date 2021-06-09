import React, { useState, useEffect } from "react";

function ShopItem({ match }) {
  useEffect(() => {
    fetchItemImage();
  }, []);

  const [itemImage, setItemImage] = useState({});

  const fetchItemImage = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const imageData = await data.json();
    if (imageData.data.item) setItemImage(imageData.data.item.images);
  };
  return (
    <div>
      <img src={itemImage.icon} alt="item-img"></img>
    </div>
  );
}

export default ShopItem;
