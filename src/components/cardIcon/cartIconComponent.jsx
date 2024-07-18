import './cardIconStyles.scss'
import { ReactComponent as ShoppingBag } from "../../assets/shoppingBag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/shoppingCartContext";

function CartIconComponent() {
  const { toggleCart, cartItems } = useContext(CartContext);

  // Sepetteki toplam ürün sayısını hesapla
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
}

export default CartIconComponent;
