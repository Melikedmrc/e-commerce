import {CartDropdownContainer, EmptyMessage,CartItems } from './cartDropdownStyles'
import Button from "../button/buttonComponent";
import {useContext} from "react";
import { CartContext } from "../../contexts/shoppingCartContext";
import CartItem from '../cartItem/cartItemComponent';
import { Link } from 'react-router-dom';

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to='/checkout'>
        <Button>GO TO CHECKOUT</Button>
      </Link>
      
    </CartDropdownContainer>
  )
}

export default CartDropdown;
