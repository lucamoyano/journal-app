import React from 'react'
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hola mundo');
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={ handleSubmit }>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"     
                    autoComplete="off"           
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"     
                    autoComplete="off"           
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />
                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    disabled={ true }
                >
                    Register
                </button>

                <Link 
                    to="/auth/register" 
                    className="link"
                >
                    Already register?
                </Link>

            </form>
        </>
    )
}
