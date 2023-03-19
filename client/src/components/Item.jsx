import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { addToCart } from "../features/CartSlice";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const { category, price, name } = item.attributes;

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      {/* image */}
      <img
        src={`http://localhost:1337${item.attributes.image.data.attributes.formats.medium.url}`}
        alt={name}
        className="w-[300px] h-[380px] md:w-[280px] md:h-[310px] cursor-pointer"
        onClick={() => navigate(`/item/${item.id}`)}
      />
      <div className="mt-4 flex items-center justify-between w-3/5 md:w-full">
        {/* category, name and price */}
        <div className="flex flex-col text-dark-blue font-medium ">
          <span className="text-dark-gray text-xs">{category}</span>
          <span>{name}</span>
          <span className="text-2xl">${price}</span>
        </div>
        {/* Amount and AddCart button */}
        <div className="flex flex-col space-y-2">
          {/* amount */}
          <div className="flex gap-x-2 font-semibold ">
            <MinusIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setCount(Math.max(count - 1, 1))}
            />
            {count}
            <PlusIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setCount(count + 1)}
            />
          </div>
          {/* add to cart button */}
          <button
            className="mx-auto text-white bg-dark-blue drop-shadow-lg baseline rounded-lg p-2 hover:bg-light-blue"
            onClick={() => {
              dispatch(addToCart({ ...item, count }));
            }}
          >
            <ShoppingCartIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
