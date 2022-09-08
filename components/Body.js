import React, { useState, useEffect } from "react";
import { ProductCard, NavBar } from ".";
import { getData } from "./utils.js/index.js";

export function Body() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await getData();
        setProducts(productsData.data.products);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className=" flex flex-row flex-wrap gap-2 mx-32 my-8">
        {products?.map((product, key) => {
          return (
            <div key={key} className=" ">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
