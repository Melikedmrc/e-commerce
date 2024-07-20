import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase"; // Doğru yolu kontrol edin

export const CategoriesContext = createContext({
  categoriesMap: {}, // Varsayılan ürün listesi boş bir dizi
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
       // Firestore'dan verileri almak için kullanılan asenkron fonksiyon
      const categoryMap = await getCategoriesAndDocuments('categories');
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []); // Boş bağımlılık dizisi, bu useEffect'in bileşen ilk render edildiğinde çalışmasını sağlar
 
 
  // useEffect(() => {
  //   // SHOP_DATA'dan ürünleri Firestore'a ekler
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])


  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
