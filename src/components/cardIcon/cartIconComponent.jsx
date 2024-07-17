import './cardIconStyles.scss'
import { ReactComponent as ShoppingBag } from "../../assets/shoppingBag.svg";

function cartIconComponent() {
  return (
    <div className='cart-icon-container'>
        <ShoppingBag className='shopping-icon'/>
        <span className='item-count' >0</span>
    </div>
  )
}

export default cartIconComponent;