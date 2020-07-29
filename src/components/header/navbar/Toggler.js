import React, { Fragment } from 'react';
import Auth from './Auth';
import UsefulLinks from './UsefulLinks';
import { connect } from 'react-redux'
import { toggle } from './../../../actions'



const Toggler = (props) => {
    const toggle = toggler => {
        toggler === 'hidden' ? props.toggle('visible') : props.toggle('hidden')
    }

    return (
        <Fragment>
            <div className="toggle" onClick={() => toggle(props.toggler)}>
                <i className="fas fa-bars"></i>
            </div>
            <div className={`toggle-items ${props.toggler}`}>
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