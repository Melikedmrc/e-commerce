import { useContext } from "react";
import { CartContext } from "../../contexts/shoppingCartContext";
import CartItem from "../../components/cartItem/cartItemComponent";

function Checkout() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <div className="checkout-items">
                {cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
        </div>
    );
}

export default Checkout;
