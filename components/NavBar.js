import React from "react";
import Link from "next/link";

export function NavBar() {
  const cartSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className="w-5 h-5"
    >
      <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
    </svg>
  );

  const homeSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className="w-5 h-5"
    >
      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
    </svg>
  );
  return (
    <div className=" h-20 bg-gray-800 w-full flex justify-between">
      <div className=" font-bold text-4xl text-white ml-4 flex items-center">
        Shopping
      </div>
      <div className=" flex mr-6 gap-2 items-center">
        <Link href={"/"}>
          <div
            className=" w-10 h-10 text-white 
          flex items-center rounded-full bg-white
        hover:bg-gray-200 justify-center "
          >
            {homeSvg}
          </div>
        </Link>
        <Link href={"/cart"}>
          <div
            className=" w-10 h-10 text-white  
          flex items-center rounded-full bg-white
        hover:bg-gray-200 justify-center "
          >
            {cartSvg}
          </div>
        </Link>
      </div>
    </div>
  );
}
