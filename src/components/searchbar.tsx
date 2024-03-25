import { useContext, useState } from "react";
import search from "./../assets/svg/search.svg";
import {
  ProductContext,
  ProductContextType,
} from "../context/products.context";

export const Searchbar = () => {
  const [keyword, setKeyword] = useState("");

  const { searchProducts } = useContext(ProductContext) as ProductContextType;

  return (
    <div className="bg-white mt-4 rounded-lg flex max-w-[600px] mx-auto">
      <input
        placeholder="Search"
        className="rounded-lg outline-none p-2 w-full"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        className="bg-[#febd69] w-14 p-2 rounded-lg"
        onClick={() => searchProducts(keyword)}
      >
        <img src={search} className="w-10" />
      </button>
    </div>
  );
};
