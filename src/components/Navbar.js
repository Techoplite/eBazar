import React from 'react';
import Logo from './Logo';
import Auth from './Auth';
import UsefulLinks from './UsefulLinks';
import Cart from './Cart';
import Toggler from './Toggler';

const Navbar = () => {
    return (
        <div className="col-12 col-s-12" id="navbar">
            <Toggler />
            <Logo />
            <UsefulLinks />
            <Auth />
            <Cart />
        </div>
    );
}

export default Navbar;