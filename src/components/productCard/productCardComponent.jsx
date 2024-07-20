import {ProductCartContainer, Footer, Name, Price} from "./productCardStyles";
import ButtonComponent, {BUTTON_TYPE_CLASSES} from "../button/buttonComponent";
import { useContext } from "react";
import { CartContext } from "../../contexts/shoppingCartContext";


function productCardComponent({product}) {
    const{name, price, imageUrl}=product;
    const{addItemToCart}=useContext(CartContext);

    const handleAddToCart=()=>{
      addItemToCart(product);
    };
    
  return (
    <ProductCartContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart}>Add to card</ButtonComponent>
    </ProductCartContainer>
  )
}

export default productCardComponent