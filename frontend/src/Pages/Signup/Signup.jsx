import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
    });
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const signup = async () => {
        console.log("Signup function executed", formData);

        setLoading(true) // Start spinner
        try {
            const response = await axios.post('http://localhost:4000/signup', formData);
            const responseData = response.data;
            console.log("This is the response data", responseData);

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace('/');
            }
            else {
                alert(responseData.error)
            }
        } catch (err) {
            alert(err);
        }
    }

    return (
        <section style={{ marginTop: '100px', marginBottom: "100px" }}>

            <div className="container-fluid">

                <div className="container p-5 pb-5"
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.823), rgba(0,0,0,0.1)), url('https://picsum.photos/1920/1080')` }}>
                    <div className="row">

                        <div className="col-md-6  text-white mb-md-0 mb-3">
                            <h1 style={{ fontSize: '50px' }}>Unlock Exclusive Features with Your<br />CineBase Account</h1>
                            <br />

                            <p class="h5"><i class="bi bi-check2-circle"></i> Join a movie lover's community for an unparalleled cinema experience</p>
                            <br />
                            <p class="h5"><i class="bi bi-check2-circle"></i>Get recommendations, save favorites, create watchlists, and stay updated.</p>
                            <br />
                            <p class="h5"><i class="bi bi-check2-circle"></i> Sign up for CineBase today and discover movie magic!.</p>
                        </div>

                        <div className="col-md-6 p-4" style={{ borderRadius: "8px", backgroundColor: '#141414' }}>

                            <div className="mb-3 text-center text-white">
                                <h1>Create Account</h1>
                                <p style={{ fontSize: "16px" }}>so you don't miss it!</p>
                            </div>

                            <div className="mb-3">
                                <label className="mb-2 text-white" style={{ fontSize: '18px' }}>Your Name</label>
                                <input type="text" name='username' value={formData.username} onChange={changeHandler} className="form-control" aria-label="Name" />
                            </div>

                            <div className="mb-3">
                                <label className="mb-2 text-white" style={{ fontSize: '18px' }}>Your Email</label>
                                <input type="email" name='email' value={formData.email} onChange={changeHandler} className="form-control" aria-label="Email" />
                            </div>

                            <div className="mb-3">
                                <label className="mb-2 text-white" style={{ fontSize: '18px' }}>Your Password</label>
                                <input type="password" name='password' value={formData.password} onChange={changeHandler} className="form-control" aria-label="Password" />
                            </div>


                            <div className="border-1 ps-2 text-whiite-50" style={{ textAlign: "left" }}>
                                <p className="">By sharing your details, you agree to our <a href="#" className='text-white-50'>Terms of Service </a>
                                    and
                                    <a href="#" className='text-white-50'> Privacy Policy</a>.
                                </p>
                            </div>

                            <button
                                type="submit"
                                onClick={() => { signup() }}
                                className="btn btn-danger text-center"
                                disabled={loading} // Disable button when loading
                            >
                                {loading ? (
                                    <div className="spinner-border spinner-border-sm text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) : (
                                    'Sign Up'
                                )}
                            </button>

                            <p style={{ fontSize: '16px', marginTop: "30px" }} className='text-white-50'>Already have an account?&nbsp;&nbsp;<Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>Signin here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup