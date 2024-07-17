import "./productCardStyles.scss";
import Button from "../button/buttonComponent";
import { useContext } from "react";
import { CartContext } from "../../contexts/shoppingCartContext";


function productCardComponent({product}) {
    const{name, price, imageUrl}=product;
    const{addItemToCart}=useContext(CartContext);

    const handleAddToCart=()=>{
      addItemToCart(product);
    };
    
  return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType='inverted' onClick={handleAddToCart}>Add to card</Button>
    </div>
  )
}

export default productCardComponent