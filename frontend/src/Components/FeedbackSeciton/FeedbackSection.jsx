import React, { useEffect, useState } from 'react'
import FeedbackItem from '../FeedbackItem/FeedbackItem'
import axios from 'axios';

const FeedbackSection = () => {
    const [feedbackItems, setFeedbackItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/getfeedbacks')
            .then((response) => {
                const feedbacks = response.data;
                console.log("It came hereeeeeeeeeeeeeeee");
                // console.log(feedbacks)
                setFeedbackItems(feedbacks);
                console.log("These are the feedbacks")
                
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <div className="section text-white"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.827), rgba(0, 0, 0, 0.8)), url(https://picsum.photos/1920/1080)' }}>
                <div className="container p-5" id="partners">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mt-3 mb-3 text-center">
                                <h1 style={{ marginBottom: "50px" }}>User Feedback: Shaping Success Stories</h1>
                                <p>Discover the impact of FinWisse courses through the eyes of our users. Their stories speak volumes about the transformative power of our educational offerings.
                                    From newfound financial confidence to practical application in real-life scenarios, our users' feedback is a testament to the effectiveness of our courses.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "50px" }}>
                        {
                            feedbackItems.map((feedback, i)=>{
                                return (
                                    <FeedbackItem key={i} country={feedback.country} name={feedback.name} message={feedback.feedback}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default FeedbackSection