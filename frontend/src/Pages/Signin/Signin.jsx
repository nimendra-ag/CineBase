import React, { useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false); // New loading state

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("Login Function executed", formData);

        setLoading(true); // Start spinner
        try {
            const response = await axios.post('http://localhost:4000/login', formData);
            const responseData = response.data;
            console.log("this is response data ", responseData);

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace('/');
            } else {
                alert(responseData.error);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false); // Stop spinner
        }
    };

    return (
        <div>
            <div className="form-signin" style={{ marginTop: '100px', backgroundColor: '#141414', borderRadius: '10px' }}>
                <h1 className="h3 mb-3 fw-normal">Sign in</h1>

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        className="form-control"
                        id="floatingInput"
                        style={{ borderRadius: '5px' }}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        className="form-control"
                        id="floatingPassword"
                        style={{ borderRadius: '5px' }}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button
                    className="w-100 btn btn-danger"
                    type="submit"
                    onClick={login}
                    disabled={loading} // Disable button when loading
                >
                    {loading ? (
                        <div className="spinner-border spinner-border-sm text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        'Sign In'
                    )}
                </button>

                <p className="mt-5 mb-3 text-white-50">
                    New to CineBase?&nbsp;&nbsp;
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">Signup Now</Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;
