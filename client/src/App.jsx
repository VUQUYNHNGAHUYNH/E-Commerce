import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";
// pages
import ItemDetails from "./pages/ItemDetails";
import Homepage from "./pages/Homepage";
import ShoppingList from "./pages/ShoppingList";
import Navbar from "./components/Navbar";

// when the user navigates to a new page, the page always starts at the top.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShoppingList />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
