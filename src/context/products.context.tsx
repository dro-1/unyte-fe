import { PropsWithChildren, createContext, useEffect, useState } from "react";
import data from "./../store/products.json";

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export type ProductContextType = {
  products: Product[];
  filteredProducts: Product[];
  cartProducts: Product[];
  searchProducts: (keyword: string) => void;
  addProductToCart: (product: Product) => void;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
  }, []);

  const addProductToCart = (product: Product) => {
    setCartProducts([...cartProducts, product]);
  };

  const searchProducts = (keyword: string) => {
    keyword = keyword.toLowerCase();
    const productsClone = Array.from(products);
    const filtered = productsClone.filter((product) =>
      product.title.toLowerCase().includes(keyword)
    );
    setFilteredProducts(filtered);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        searchProducts,
        cartProducts,
        addProductToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
