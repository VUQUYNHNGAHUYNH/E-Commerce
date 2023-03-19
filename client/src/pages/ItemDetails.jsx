import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/CartSlice";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);

  async function getItem() {
    const response = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemJson = await response.json();
    setItem(itemJson.data);
  }

  useEffect(() => {
    getItem();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-wrap container mx-auto gap-5 mt-12">
      {/* left side */}
      <div className="flex-1 basis-[40%] w-full h-full object-contain">
        <img
          src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
          alt={item?.name}
        />
      </div>
      {/* right side */}
      <div className="flex-1 basis-[50%] text-center md:text-left space-y-8 ">
        <div className="flex flex-col sm:flex-col-reverse space-y-4">
          {/* count and add button */}
          <div className="flex gap-x-8 justify-center items-center py-8">
            <div className="flex gap-x-4 text-xl font-bold border-2 border-light-gray rounded-lg p-2 ">
              <MinusIcon
                className="w-6 h-6 cursor-pointer"
                onClick={() => setCount(Math.max(count - 1, 1))}
              />
              <span>{count}</span>
              <PlusIcon
                className="w-6 h-6 cursor-pointer"
                onClick={() => setCount(count + 1)}
              />
            </div>
            <button
              onClick={() => dispatch(addToCart({ ...item, count }))}
              className="text-white text-xl bg-dark-blue drop-shadow-xl baseline rounded-lg px-6 py-4 hover:bg-light-blue"
            >
              Add To Cart
            </button>
          </div>
          {/* info */}
          <div className="flex flex-col space-y-2 md:text-2xl text-xl">
            <span className="text-base md:text-xl">
              {item?.attributes?.category}
            </span>
            <span className="font-semibold font-Lato ">
              {item?.attributes?.name}
            </span>
            <span className=" font-bold">${item?.attributes?.price}</span>
            <span className="md:py-8">{item?.attributes?.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
