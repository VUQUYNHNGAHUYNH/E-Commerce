import { Link } from "react-router-dom";
import modelImage from "../assets/bg-model.svg";
import ShoppingList from "./ShoppingList";

const Homepage = () => {
  return (
    <section className="flex flex-col py-10 md:w-full md:pb-0">
      {/* Hero section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* text */}
        <div className="  flex flex-col mx-auto justify-start items-center space-y-8 text-center md:text-left md:w-3/5">
          <div className=" space-y-8 uppercase text-dark-blue font-Lato font-semibold md:text-left tracking-wider">
            <h2 className=" text-3xl md:text-4xl ">Welcome to __ </h2>{" "}
            <span className="font-extrabold text-6xl md:text-7xl ">
              CLOTHIFY
            </span>
            <h2 className="text-xl md:text-2xl font-bold w-full">
              Your Ultimate Fashion Destination
            </h2>
          </div>
          <p className="text-dark-gray font-medium text-base md:text-lg max-w-lg">
            We're passionate about bringing you the latest and greatest in
            fashion trends. Whether you're looking for a statement piece for a
            night out or something cozy for a day in, we've got you covered.
          </p>
          <Link to="/shop">
            <button className="text-white text-2xl bg-dark-blue drop-shadow-xl baseline rounded-lg px-9 py-5 hover:bg-light-blue">
              Shop Now
            </button>
          </Link>
        </div>
        {/* image */}
        <div className="md:w-2/5 mt-10">
          <img src={modelImage} alt="modelImage" />
        </div>
      </div>
      {/* Feature section */}
      <ShoppingList />
    </section>
  );
};

export default Homepage;
