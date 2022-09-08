import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import { useSelector, useDispatch } from "react-redux";
import { addInCart } from "../redux/cartSlice";

export function ProductCard({ product }) {
  const [title, setTitle] = useState("");
  const [isToolTipMounted, setIsToolTipMounted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(
      product.title.length >= 19
        ? product.title.slice(0, 16).concat("", "...")
        : product.title
    );
  }, [product]);
  return (
    <div
      className=" hover:shadow-2xl w-64 h-fit m-3 relative border border-gray-200 rounded-lg"
      // style={{ height: "auto", overflow: "auto" }}
    >
      <div className="relative w-full h-48">
        <Image
          alt="Product info"
          className="rounded-lg "
          src={product.thumbnail}
          layout="fill"
          objectFit="cover"
          // width="300"
          // height="200"
          // loader={myLoader}
        ></Image>
      </div>
      <div className=" flex gap-4 ml-2">
        <div
          className=" text-lg font-bold"
          data-tip={product.title}
          data-for={product.id.toString()}
          onMouseEnter={() => {
            setIsToolTipMounted(true);
          }}
          onMouseLeave={() => {
            setIsToolTipMounted(false);
          }}
        >
          {title}
        </div>
        {isToolTipMounted && (
          <ReactTooltip id={product.id.toString()}>
            {product.title}
          </ReactTooltip>
        )}
        <div>$ {product.price}</div>
      </div>
      <div className=" flex my-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 ml-2 px-4 rounded">
          Details
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 ml-2 px-4 rounded"
          onClick={() => dispatch(addInCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
