import { useContext } from "react";
import { ProductContext } from "../../contexts/productsContext";
import ProductCard from "../../components/productCard/productCardComponent";
import "./shopStyles.scss"

function ShopComponent() {
    // productsContext'ten products verisini çekiyoruz
    const { products } = useContext(ProductContext);

    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
}

export default ShopComponent;
