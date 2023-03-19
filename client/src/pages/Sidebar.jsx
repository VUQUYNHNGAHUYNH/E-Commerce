import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  resetCart,
  setCartIsOpen,
} from "../features/CartSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCartOpen, cartProducts } = useSelector((state) => state.cart);
  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.count * item.attributes.price,
    0
  );
  return (
    <div
      className="bg-gray-200 flex-col w-full h-full fixed top-0 shadow-2xl md:w-[40vw] xl:max-w-[35vw]
     transition-all duration-300 z-20 px-4 lg:px-8"
    >
      {/* header and close icon */}
      <div className="flex items-center justify-between py-6 border-b border-light-gray">
        <div className="text-lg font-semibold font-Lato">
          Shopping Bag ({cartProducts.length})
        </div>
        <div className="flex cursor-pointer hover:text-red-400">
          <XCircleIcon
            className="w-8 h-8 "
            onClick={() => dispatch(setCartIsOpen(!isCartOpen))}
          />
        </div>
      </div>

      {/* cart list */}
      {cartProducts.map((item) => (
        <div key={`${item.id}`} className="flex flex-col w-full lg:px-6 py-2">
          <div className="w-full min-h-[150px] flex items-center space-x-2">
            {/* image */}
            <img
              src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
              alt={item?.name}
              className="w-[123px] h-[164px]"
            />
            <div className="w-full flex flex-col">
              {/* title and remove */}
              <div className="flex mb-2 justify-between items-center">
                <Link
                  to={`/shop/`}
                  className="font-medium text-base hover:text-dark-blue max-w-[240px]"
                >
                  {item.attributes.name}
                </Link>
                <TrashIcon
                  className="w-6 h-8 cursor-pointer hover:text-red-700"
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                />
              </div>
              {/* quantity */}
              <div className="flex gap-x-3 h-[35px] text-sm items-center">
                <div className="flex border-2 border-light-gray justify-center items-center space-x-1">
                  <MinusIcon
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => dispatch(decreaseCount({ id: item.id }))}
                  />
                  <span>{item.count}</span>
                  <PlusIcon
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => dispatch(increaseCount({ id: item.id }))}
                  />
                </div>

                <div className="flex-1 flex justify-start items-center">
                  {item.count} X ${item.attributes.price}
                </div>
                <div className="flex-1 flex justify-end items-center font-semibold">
                  Total: ${item.count * item.attributes.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Total checkout button */}
      <div className="flex items-center justify-around py-4">
        <div className="w-full items-center text-lg font-semibold">
          <span className="mr-2">SubTotal:</span> $ {totalPrice}
        </div>
        <button
          className="text-white bg-dark-blue drop-shadow-lg baseline rounded-lg px-4 py-3 hover:bg-light-blue"
          onClick={() => {
            navigate("/");
            dispatch(resetCart());
            dispatch(setCartIsOpen(!isCartOpen));
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
