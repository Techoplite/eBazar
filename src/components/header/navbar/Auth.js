import React from 'react';

const Auth = (props) => {
    return (
        <div className="auth">
            <a href="/register/" className="toggle-link" id="register">Register</a>
            <a href="/signin/" className="toggle-link" id="signin">Sign in</a>
        </div>
    );
}

export default Auth;