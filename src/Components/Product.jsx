import React, { memo } from "react";

const Product = ({
  id,
  bgColor,
  image,
  title,
  description,
  price,
  onClick,
  faketext,
}) => {
  console.log("Child re-rendering");
  return (
    <div key={id} style={{ backgroundColor: bgColor }}>
      <h2>it is child Component {faketext ? "right" : "wrong"}</h2>
      <img src={image} alt={title} />
      <h1 className="product-title">{title}</h1>
      <p className="info">{description}</p>
      <p>{price}</p>
      <input
        type="color"
        name="bgColor"
        value={bgColor}
        onChange={(e) => onClick(e, id)}
      />
    </div>
  );
};

export default memo(Product);
