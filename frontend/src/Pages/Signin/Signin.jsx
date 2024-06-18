import React, { useState } from 'react'
import Logo from '../../assets/Images/Sabzi.png'
import './Signin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const login = async () =>{
        console.log("Login Fucntin executed", formData);

        try{
          const response = await axios.post('http://localhost:4000/login', formData);
          const responseData = response.data;
          console.log("this is response data ", responseData);
    
          if(responseData.success){
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        }
        else{
            alert(responseData.error)
        }

        } catch (err){
          console.log(err);
        }
      }

    return (
        <div>

            <div className="form-signin" style={{marginTop:'100px'}}>
                    <img className="mb-4" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={Logo} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" name='email' value={formData.email} onChange={changeHandler} className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" name='password' value={formData.password} onChange={changeHandler} className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={()=>{login()}}>Sign in</button>
                    <p className="mt-5 mb-3 text-muted">You Don't have an account ? <Link style={{ textDecoration: 'none' }} to='/signup'>Signup here</Link></p>
            </div>
        </div>
    )
}

export default Signin