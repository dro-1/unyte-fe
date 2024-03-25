import { useContext } from "react";
import {
  Product,
  ProductContext,
  ProductContextType,
} from "../context/products.context";
import add from "./../assets/svg/add.svg";
import compare from "./../assets/svg/compare.svg";
import toast from "react-hot-toast";
import { ellipsize } from "../utils/utils";
import { useNavigate } from "react-router-dom";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addProductToCart } = useContext(ProductContext) as ProductContextType;
  const navigate = useNavigate();
  return (
    <div className="flex items-center my-2 px-6 h-[200px] max-w-[500px] mx-auto">
      <div className="bg-slate-100 p-4 w-[50%] self-stretch min-[370px]:self-normal relative">
        <img
          className="relative top-[50%] -translate-y-[50%] w-[80%] max-h-[165px] mx-auto object-contain"
          src={product.image}
        />
      </div>
      <div className="w-[50%] p-2 overflow-hidden space-y-2">
        <h2 className="font-bold text-ellipsis overflow-hidden">
          {ellipsize(product.title, 50)}
        </h2>
        <h2>${product.price}</h2>
        <div>
          <button
            className="bg-[#e6e9ea] p-2 rounded mr-2"
            onClick={() =>
              navigate("/compare", {
                state: {
                  product,
                },
              })
            }
          >
            <img className="w-5" src={compare} />{" "}
          </button>
          <button
            className="bg-[#57c8e4] p-2 rounded"
            onClick={() => {
              addProductToCart(product);
              toast.success("Product added to cart");
            }}
          >
            <img className="w-5" src={add} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
