import { createContext, useState } from "react";
import shopData from "../shopData.json";


// Ürün verilerini sağlayacak olan context'i oluşturuyoruz
export const ProductContext = createContext({
  products: [], // varsayılan ürün listesi boş bir dizi
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(shopData);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
