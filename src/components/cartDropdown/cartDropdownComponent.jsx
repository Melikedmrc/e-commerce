import './cartDropdownStyles.scss'
import Button from "../button/buttonComponent";

function cartDropdownComponent() {
  return (
    <div className="cart-dropdown-container">
        <div className='cart-items' />
         
         <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default cartDropdownComponent