import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
    })

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const signup = async () => {
        console.log("Signup function executed", formData);

        try{
            const response = await axios.post('http://localhost:4000/signup', formData);
            const responseData = response.data;
            console.log("This is the response data", responseData);

            if(responseData.success){
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace('/');
            }
            else{
                alert(responseData.error)
            }
        }catch(err){
            alert(err);
        }
    }

    return (
        <section className="portfolio section-padding" id="contact" style={{marginTop:'100px'}}>

            <div className="container-fluid">

                <div className="container p-5 pb-5"
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.823), rgba(0,0,0,0.1)), url('https://picsum.photos/1920/1080')` }}>
                    <div className="row">

                        <div className="col-md-6  text-primary mb-md-0 mb-3">
                            <h1 style={{ fontSize: '60px' }}>Try FinWise free for<br />30 days</h1>
                            <br />
                            <h2>The average FinWiser<br />saves $600 in their<br />first two months (and you<br />seem above average, honestly).</h2>
                        </div>

                        <div className="col-md-6 bg-light p-4" style={{borderRadius: "15px"}}>

                            <div className="mb-3 text-center" style={{ color: 'black' }}>
                                <h1>Create Account</h1>
                                <p style={{ fontSize: "16px" }}>to continue as a FinWiser</p>
                            </div>

                            <div className="mb-3">
                                <label className="mb-2" style={{ fontSize: '18px', color: 'black' }}>Your Name</label>
                                <input type="text" name='username' value={formData.username} onChange={changeHandler} className="form-control" aria-label="Name" />
                            </div>

                            <div className="mb-3">
                                <label className="mb-2" style={{ fontSize: '18px', color: 'black' }}>Your Email</label>
                                <input type="email" name='email' value={formData.email} onChange={changeHandler} className="form-control" aria-label="Email" />
                            </div>

                            <div className="mb-3">
                                <label className="mb-2" style={{ fontSize: '18px', color: 'black' }}>Your Password</label>
                                <input type="password" name='password' value={formData.password} onChange={changeHandler} className="form-control" aria-label="Password" />
                            </div>


                            <div className="border-1 ps-2" style={{ textAlign: "left" }}>
                                <p className="">By sharing your details, you agree to our <a href="#">Terms of Service </a>
                                    and
                                    <a href="#"> Privacy Policy</a>.
                                </p>
                            </div>
                          
                            <button type="submit" onClick={()=>{signup()}} className="btn btn-outline-primary text-center">Sign Up</button>
                            
                            <p style={{ fontSize: '16px', marginTop: "30px" }}>Already have an account? <Link style={{textDecoration: 'none'}} to='/login'>Signin here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup