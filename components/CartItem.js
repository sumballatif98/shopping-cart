import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} from "../redux/cartSlice";

export function CartItem() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return cart.length ? (
    <div>
      <CartHeader />
      {cart.map((item) => {
        return (
          <div
            className="flex justify-between mx-12 h-32 bg-gray-50 border border-gray-200 pr-3 my-2 items-center"
            key={item.id}
          >
            <div className=" flex gap-4 h-full">
              <div className="relative w-24  bg-black rounded-lg ">
                <Image
                  alt="Product info"
                  className="rounded-lg "
                  src={item.details.thumbnail}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className=" text-lg font-bold flex items-center">
                {item.details.title}
              </div>

              <div className="flex flex-col justify-evenly">
                {/* <div className=" break-all mb-3">
                  {item.details.description}{" "}
                </div> */}
              </div>
            </div>
            <Quantity item={item} />
            <div>$ {item.details.price}</div>
            <div>$ {item.details.price * item.quantity}</div>
            <button
              className="bg-white hover:bg-gray-200 text-red-600 font-bold ml-2 h-8 px-4 rounded border border-red-600"
              onClick={() => {
                dispatch(removeProduct(item.details.id));
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <Empty />
  );
}

function Quantity({ item }) {
  const dispatch = useDispatch();

  return (
    <div className=" flex gap-1">
      <div
        className=" text-lg hover:text-xl hover:cursor-pointer"
        onClick={() => {
          dispatch(decrementQuantity(item.details.id));
        }}
      >
        -
      </div>
      <div className=" w-fit h-fit py-1 px-2 rounded border border-gray-200 bg-white">
        {item.quantity}
      </div>
      <div
        className=" text-lg hover:text-xl hover:cursor-pointer"
        onClick={() => {
          dispatch(incrementQuantity(item.details.id));
        }}
      >
        +
      </div>
    </div>
  );
}

function CartHeader() {
  return (
    <div className="flex justify-between mx-12 h-32 bg-gray-50 border border-gray-200 pr-3 my-2 items-center">
      <div className=" flex gap-4 h-full">
        <div className="relative w-24 rounded-lg "></div>
        <div className=" text-lg font-bold flex items-center">Title</div>
      </div>
      <div className="text-lg font-bold ">Quantity</div>
      <div className="text-lg font-bold ">Price</div>
      <div className="text-lg font-bold ">Total Price</div>
      <div className="font-bold ml-2 h-8 px-4 "></div>
    </div>
  );
}

function Empty() {
  return (
    <div className="  bg-red-400 h-32 mx-24 my-12 flex items-center justify-center text-3xl font-bold text-white rounded-lg">
      Your cart is empty
    </div>
  );
}
