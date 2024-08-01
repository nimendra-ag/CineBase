import React, { useState } from 'react'
import axios from 'axios';

const FeedbackForm = () => {
    const [formContent, setFormContent] = useState({
        name:"",
        country: "",
        feedback: "",
    })

    const changeHandler = (e) => {
        setFormContent({...formContent, [e.target.name]: e.target.value})
    }
    const Add_Feedback = async () => {
        console.log(formContent);

        try{
            const response = await axios.post('http://localhost:4000/addfeedback', formContent, {
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success){
                alert("Feedback added successfully");
            } else{
                alert("Feedback not added");
            }
        } catch (error){
            console.log(error);
        }
    }
    return (
        <>
            <div className="col-sm-12" style={{ padding: '0 100 0 100' }}>

                    <div className="form-group mb-3">
                        <label className="sr-only">Name</label>
                        <input value={formContent.name} onChange={changeHandler} type="text" className="form-control" placeholder="Name"
                            name="name" required />
                    </div>

                    <div className="form-group mb-3">
                        <label className="sr-only" >Country</label>
                        <input value={formContent.country} onChange={changeHandler} type="text" className="form-control" placeholder="Your Country"
                            name="country" required />
                    </div>

                    <div className="form-group mb-3">
                        <label className="sr-only">Your Feedback</label>
                        <textarea value={formContent.feedback} onChange={changeHandler} type="text" className="form-control" rows="5" placeholder="Your Feedback"
                            name="feedback" required></textarea>
                    </div>

                    
                    <button onClick={()=>{Add_Feedback()}} className='btn btn-danger'>Submit</button>

            </div>
        </>
    )
}

export default FeedbackForm