import React from "react";

const ImageCard = ({ title, price }) => {
  return (
    <div className="imageCard">
      <img src="https://placehold.co/300x300" alt="" />
      <p className="image-card-title">{title}</p>
      <p className="image-card-price">{price}</p>
    </div>
  );
};

export default ImageCard;
