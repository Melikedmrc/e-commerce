import  { CartIconContainer, ItemCount } from './cardIconStyles'
import { ReactComponent as ShoppingBag } from "../../assets/shoppingBag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/shoppingCartContext";

function CartIconComponent() {
  const { toggleCart, cartItems } = useContext(CartContext);

  // Sepetteki toplam ürün sayısını hesapla
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingBag className='shopping-icon' />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIconComponent;
