import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../components/Item";
import { setItems } from "../features/CartSlice";

const categories = [
  { label: "All", value: "All" },
  { label: "Top Rated", value: "Top Rated" },
  { label: "New Arrivals", value: "New Arrivals" },
  { label: "Best Sellers", value: "Best Sellers" },
];

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("All");
  const items = useSelector((state) => state.cart.items);

  async function getItems() {
    const response = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemJson = await response.json();
    dispatch(setItems(itemJson.data));
  }
  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredItems =
    value === "All"
      ? items
      : items.filter((item) => item.attributes.category === value);

  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-center text-3xl font-Lato mb-4">
        Our Featured Products
      </h1>
      <div className="mx-auto text-center border-b border-gray-200 text-base md:text-xl font-medium">
        {/* categories */}
        <ul className="flex flex-wrap ">
          {categories.map((category) => (
            <li
              key={category.value}
              value={category.value}
              onClick={() => setValue(category.value)}
              className={`inline-block cursor-pointer p-3 hover:border-b-2 hover:border-dark-blue 
              ${
                value === category.value && "border-b-2 bg-dark-blue text-white"
              }`}
            >
              {category.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] mt-8">
          {filteredItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
