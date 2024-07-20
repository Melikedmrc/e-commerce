import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CrownLogo from '../../assets/crown.svg';
import {NavigationContainer, LogoContainer, NavLinkContainer, NavLink}from './NavigationStyles.jsx';
import { UserContext } from '../../contexts/userContext';
import { CartContext } from "../../contexts/shoppingCartContext";

import { signOutUser } from '../../utils/firebase/firebase';

import CartIcon  from "../../components/cardIcon/cartIconComponent";
import CartDropdown from "../../components/cartDropdown/cartDropdownComponent";

function Navigation() {

    const { currentUser} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    // console.log(currentUser);

    // const signOutHandler = async () => {
    //     await signOutUser();
    //     setCurrentUser(null);
    // }


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <img src={CrownLogo} alt="Crown Logo" className="logo" />
                </LogoContainer>
                <NavLinkContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>

                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}> 
                            SIGN OUT
                            </span>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinkContainer>
                {
                  isCartOpen &&  
                    <CartDropdown/>
                }
                

            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
