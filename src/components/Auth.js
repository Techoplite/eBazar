import React from 'react';

const Auth = () => {
    return (
        <div className="col-3 col-s-4 col-xs-12 " id="auth">
            <a href="/register/" className="auth-link">Register</a>
            <a href="/signin/" className="auth-link">Sign in</a>
        </div>
    );
}

export default Auth;