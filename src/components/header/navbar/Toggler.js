import React, { Fragment } from 'react';
import Logo from './Logo';
import Auth from './Auth';
import UsefulLinks from './UsefulLinks';
import Cart from './Cart';
import { connect } from 'react-redux'
import { toggle } from './../../../actions'


const Toggler = (props) => {
    const toggle = toggler => {
        console.log(toggler);

        toggler === 'hidden' ? props.toggle('visible') : props.toggle('hidden')

    }

    return (
        <Fragment>
            <div className="col-xs-2" id="toggler" onClick={() => toggle(props.toggler)}>
                <i className="fas fa-bars" id="i-toggler" ></i>
            </div>
            <Logo />
            <UsefulLinks toggler={props.toggler} />
            <Auth toggler={props.toggler} />
            <Cart toggler={props.toggler} />
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