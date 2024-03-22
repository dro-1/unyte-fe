import { Dispatch, SetStateAction, useContext, useState } from "react";
import add from "./../assets/svg/add-comp.svg";
import {
  Product,
  ProductContext,
  ProductContextType,
} from "../context/products.context";
import { Modal } from "react-overlays";
import { RenderModalBackdropProps } from "react-overlays/cjs/Modal";
import { ellipsize } from "../utils/utils";
import { useLocation } from "react-router-dom";

const Slide: React.FC<{
  product: Product | null;
  type: "left" | "right";
  setProduct: (product: null) => void;
  setProductSelection: Dispatch<SetStateAction<"left" | "right">>;
  setShowModal: (shouldShowModal: boolean) => void;
}> = ({ product, type, setProduct, setProductSelection, setShowModal }) => {
  return (
    <div className="w-[50%]">
      {" "}
      {product ? (
        <div className="space-y-2 mt-4 p-2 overflow-hidden">
          <img className="h-[150px] mx-auto" src={product.image} />
          <h2 className="font-bold text-center p-2">{product.title}</h2>
          <h2 className="text-sm">{product.description}</h2>
          <h2 className="font-bold text-4xl text-center">${product.price}</h2>
          <button
            onClick={() => setProduct(null)}
            className="bg-slate-300 p-2 rounded-lg mx-auto block"
          >
            Clear
          </button>
        </div>
      ) : (
        <div className="text-center">
          <img
            onClick={() => {
              setProductSelection(type);
              setShowModal(true);
            }}
            className="w-16 mx-auto mt-8 mb-4"
            src={add}
          />
          <h1>No Product Added</h1>
        </div>
      )}
    </div>
  );
};

export const Compare = () => {
  const location = useLocation();
  const [leftProduct, setLeftProduct] = useState<Product | null>(
    location.state.product
  );
  const [rightProduct, setRightProduct] = useState<Product | null>(null);
  const [productSelection, setProductSelection] = useState<"left" | "right">(
    "left"
  );
  const [showModal, setShowModal] = useState(false);
  const { products } = useContext(ProductContext) as ProductContextType;

  const renderBackdrop = (props: RenderModalBackdropProps) => (
    <div
      className="fixed z-[1040] top-0 bottom-0 left-0 right-0 bg-black opacity-50"
      {...props}
    />
  );

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        renderBackdrop={renderBackdrop}
        aria-labelledby="modal-label"
        className="fixed w-[70vw] h-[60vh] z-[1040] top-[20%] left-[50%] border border-[#e5e5e5] bg-white p-[20px] -translate-x-[50%] overflow-y-scroll"
      >
        <div className="space-y-2 ">
          {products.map((product) => (
            <div
              onClick={() => {
                if (productSelection == "left") setLeftProduct(product);
                if (productSelection == "right") setRightProduct(product);
                setShowModal(false);
              }}
              className="flex bg-slate-100 p-2 items-center"
            >
              <img className="w-[50px] mr-2" src={product.image} />
              <h2>{ellipsize(product.title, 30)}</h2>
            </div>
          ))}
        </div>
      </Modal>
      <div className="flex h-auto">
        <Slide
          product={leftProduct}
          type="left"
          setProduct={setLeftProduct}
          setProductSelection={setProductSelection}
          setShowModal={setShowModal}
        />
        <div className="bg-slate-300 h-auto w-[2px]" />
        <Slide
          product={rightProduct}
          type="right"
          setProduct={setRightProduct}
          setProductSelection={setProductSelection}
          setShowModal={setShowModal}
        />
      </div>
    </>
  );
};
