import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categoriesPrevies/categoriesPreviewComponent";
import Category from "../category/categoryComponent";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
