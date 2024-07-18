import './cartDropdownStyles.scss'
import Button from "../button/buttonComponent";
import {useContext} from "react";
import { CartContext } from "../../contexts/shoppingCartContext";
import CartItem from '../cartItem/cartItemComponent';
import { Link } from 'react-router-dom';

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(item => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Link to='/checkout'>
        <Button>GO TO CHECKOUT</Button>
      </Link>
      
    </div>
  )
}

export default CartDropdown;
