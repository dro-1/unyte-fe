import { useContext, useEffect, useState } from "react";
import Loader from "./../components/loader";
import {
  ProductContext,
  ProductContextType,
} from "./../context/products.context";
import { ProductCard } from "./../components/product-card";

export const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { filteredProducts } = useContext(ProductContext) as ProductContextType;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="min-[1000px]:grid min-[1000px]:grid-cols-2 min-[1000px]:max-w-[1000px] min-[1000px]:mx-auto">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
