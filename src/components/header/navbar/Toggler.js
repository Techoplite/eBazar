import React, { Fragment } from 'react';
import Logo from './Logo';
import Auth from './Auth';
import UsefulLinks from './UsefulLinks';
import { connect } from 'react-redux'
import { toggle } from './../../../actions'
import Cart from './Cart';



const Toggler = (props) => {
    const toggle = toggler => {
        console.log(toggler);

        toggler === 'hidden' ? props.toggle('visible') : props.toggle('hidden')

    }

    return (
        <Fragment>
            <div className="col-12" id="small-navbar">
                <div id="toggler" onClick={() => toggle(props.toggler)}>
                    <i className="fas fa-bars" id="i-toggler" ></i>
                </div>
                <Logo />
                <Cart toggler={props.toggler} />

            </div>
            <div className={`col-12 toggable-items ${props.toggler}`}>
                <Auth toggler={props.toggler} />
                <UsefulLinks toggler={props.toggler} />
            </div>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        toggler: state.toggler
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (toggler) => {
            dispatch(toggle(toggler))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggler);