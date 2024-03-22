import home from "./../assets/svg/home.svg";
import user from "./../assets/svg/user.svg";
import cart from "./../assets/svg/cart.svg";
import { useContext } from "react";
import {
  ProductContext,
  ProductContextType,
} from "../context/products.context";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { cartProducts } = useContext(ProductContext) as ProductContextType;
  return (
    <nav className="flex justify-between items-center">
      <Link to="/">
        <div>
          <img src={home} className="w-8" />
        </div>
      </Link>
      <div className="flex">
        <img src={user} className="w-8 mr-4" />
        <div className="relative">
          <img src={cart} className="w-8" />
          <em className="absolute -top-4 left-3.5 text-white text-sm not-italic">
            {cartProducts.length}
          </em>
        </div>
      </div>
    </nav>
  );
};
