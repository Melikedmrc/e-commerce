import { Link } from 'react-router-dom';
import ProductCard from "../productCard/productCardComponent";
import{CategoryPreviewContainer, Title, Preview,}  from  "./categoryPreviewStyles";

const CategoryPreviewComponent = ({ title, products }) => (
    <CategoryPreviewContainer>
      <Title>
        <Link to={`/shop/${title.toLowerCase()}`} className='title'>{title.toUpperCase()}</Link>
      </Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
);

export default CategoryPreviewComponent;
