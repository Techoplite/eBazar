import React from 'react';

const Auth = (props) => {
    return (
        <div className={`  ${props.toggler}`} id="auth">
            <a href="/register/" className="auth-link">Register</a>
            <a href="/signin/" className="auth-link">Sign in</a>
        </div>
    );
}

export default Auth;