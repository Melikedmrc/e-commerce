import './cardIconStyles.scss'
import { ReactComponent as ShoppingBag } from "../../assets/shoppingBag.svg";

import { useContext } from "react";
import { CartContext } from "../../contexts/shoppingCartContext";

function cartIconComponent() {

  const {toggleCart} = useContext(CartContext);

  return (
    <div className='cart-icon-container' onClick={toggleCart}>
        <ShoppingBag className='shopping-icon'/>
        <span className='item-count' >0</span>
    </div>
  )
}

export default cartIconComponent;