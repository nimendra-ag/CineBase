import React, { useState } from 'react'
import './AdminLogin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const AdminLogin = () => {
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
          const response = await axios.post('http://localhost:4000/adminlogin', formData);
          const responseData = response.data;
          console.log("this is response data ", responseData);
    
          if(responseData.success){
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/listmovies');
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

            <div className="form-signin" style={{marginTop:'100px', backgroundColor:'#141414', borderRadius:'10px'}}>
                    <h1 className="h3 mb-3 fw-normal"  style={{color:"white"}}>Sign in</h1>

                    <div className="form-floating mb-3">
                        <input type="email" name='email' value={formData.email} onChange={changeHandler} className="form-control" id="floatingInput" style={{borderRadius:'5px'}}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" name='password' value={formData.password} onChange={changeHandler} className="form-control" id="floatingPassword" style={{borderRadius:'5px'}}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>


                    <button className="w-100 btn btn-danger" type="submit" onClick={()=>{login()}}>Log in</button>
            </div>
        </div>
  )
}

export default AdminLogin