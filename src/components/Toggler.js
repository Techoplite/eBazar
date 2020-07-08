import React, { useState, Fragment } from 'react';
import Logo from './Logo';
import Auth from './Auth';
import UsefulLinks from './UsefulLinks';
import Cart from './Cart';

const Toggler = () => {
    const [toggle, setToggle] = useState("hidden")

    return (
        <Fragment>
            <div className="col-xs-2" id="toggler" onClick={() => {
                toggle === "hidden" ? setToggle("") : setToggle("hidden")
            }}>
                <i className="fas fa-bars" id="i-toggler" ></i>
            </div>
            <Logo />
            <UsefulLinks toggle={toggle} />
            <Auth toggle={toggle} />
            <Cart toggle={toggle} />
        </Fragment>
    );
}

export default Toggler;