import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/crown.svg";
import { setCartIsOpen } from "../features/CartSlice";
import Sidebar from "../pages/Sidebar";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isCartOpen, cartProducts } = useSelector((state) => state.cart);

  return (
    <>
      <nav className="container mx-auto p-6">
        <div className="flex items-center justify-between cursor-pointer hover:text-dark-blue">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="flex space-x-8 items-center justify-center text-lg md:text-xl">
            <Link to="/shop/" className="font-medium font-Lato">
              SHOP
            </Link>
            <div
              className="relative"
              onClick={() => dispatch(setCartIsOpen(!isCartOpen))}
            >
              <ShoppingBagIcon className="w-6 h-6 " />
              {cartProducts.length > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex justify-center items-center text-sm px-1 text-white rounded-lg bg-red-600">
                  {cartProducts.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
      {isCartOpen && <Sidebar />}
    </>
  );
};

export default Navbar;
