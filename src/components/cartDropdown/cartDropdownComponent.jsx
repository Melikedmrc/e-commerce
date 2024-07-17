import './cartDropdownStyles.scss'
import Button from "../button/buttonComponent";
import {useContext} from "react";
import { CartContext } from "../../contexts/shoppingCartContext";

function cartDropdownComponent() {
  const {toggleCart, cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
    <div className='cart-items'>
      {cartItems.map(item => (
        <div key={item.id} className='cart-item'>
          {/* <img src={item.imageUrl} alt={item.name} /> */}
          <div className='item-details'>
            <span className='name'>{item.name}</span>
            <span className='price'>
            {' '} {item.quantity} {' '} ${item.price}
            </span>
          </div>
        </div>
      ))}
    </div>
         <Button onClick={toggleCart}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default cartDropdownComponent