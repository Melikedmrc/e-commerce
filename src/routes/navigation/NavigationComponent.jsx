import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CrownLogo from '../../assets/crown.svg';
import '../navigation/NavigationStyles.scss';
import { UserContext } from '../../contexts/userContext';
import { signOutUser } from '../../utils/firebase/firebase';
function Navigation() {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    // console.log(currentUser);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }


    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img src={CrownLogo} alt="Crown Logo" className="logo" />
                </Link>
                <div className="nav-link-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>

                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutHandler}> SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }

                </div>

            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
