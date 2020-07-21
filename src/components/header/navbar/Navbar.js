import React from 'react';
import Toggler from './Toggler';
import Logo from './Logo';
import Cart from './Cart';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo />
            <Cart />
            <Toggler />
        </div>
    )
}

export default Navbar;