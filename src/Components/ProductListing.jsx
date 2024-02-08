import React, { useCallback, useEffect, useState } from "react";
import Product from "./Product";

const ProductListing = () => {
  const [products, setProduct] = useState([]);
  const [fakeData, setFake] = useState(true);
  const [fakeData2, setFake2] = useState(true);
  useEffect(() => {
    (() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) =>
          setProduct(
            data.map((pr) => ({
              ...pr,
              bgColor: "#ffffff",
            }))
          )
        )
        .catch((err) => console.error(err));
    })();
  }, []);
  console.log("Parent re-rendering");
  const changeColor = useCallback((e, id) => {
    console.log("child method clicked");
    const { name, value } = e.target;
    setProduct((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value }; // Update color for selected item
        }
        return item; // Keep other items unchanged
      })
    );
  }, []);
  const parentClick = () => {
    setFake((prev) => !prev);
  };
  const ParentChildClick = () => {
    setFake2(!fakeData2);
  };
  return (
    <>
      <h2>Hello it is {fakeData ? "fake" : "not fake"}</h2>
      <button onClick={parentClick}>Fake click1</button>
      <button onClick={ParentChildClick}>Fake click2</button>
      <div className="row">
        {products?.map((product) => (
          <Product
            faketext={fakeData2}
            onClick={changeColor}
            id={product.id}
            bgColor={product.bgColor}
            image={product.image}
            title={product.title}
            description={product.description}
            key={product.id}
          />
        ))}
      </div>
    </>
  );
};

export default ProductListing;
