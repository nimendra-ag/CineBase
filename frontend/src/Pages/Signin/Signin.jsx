import React from 'react'
import Logo from '../../assets/Images/Sabzi.png'
import './Signin.css'
import { Link } from 'react-router-dom'
const Signin = () => {
    return (
        <div>
            
            <div className="form-signin">
                
                <form>
                    <img className="mb-4" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={Logo} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                     <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">You Don't have an account ? <Link style={{textDecoration: 'none'}} to='/signup'>Signup here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signin