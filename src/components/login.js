import React from 'react';

export default function (props) {
    return (
        <div className="login-form-container">
            <form className='login-form'>
                <div className="login-form-content">
                    <h3 className="login-form-title">Login</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input 
                        type="username"
                        className="form-control mt-1"
                        placeholder="Enter Username"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter Password"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}