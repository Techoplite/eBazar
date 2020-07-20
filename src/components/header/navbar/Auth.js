import React from 'react';

const Auth = (props) => {
    return (
        <div className={`${props.toggler}`} id="auth-links">
            <a href="/register/" className={`auth-link ${props.toggler}`}>Register</a>
            <a href="/signin/" className={`auth-link ${props.toggler}`}>Sign in</a>
        </div>
    );
}

export default Auth;