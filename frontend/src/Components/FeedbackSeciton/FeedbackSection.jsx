import React, { useEffect, useState } from 'react';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeedbackSection = () => {
    const [feedbackItems, setFeedbackItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/getfeedbacks')
            .then((response) => {
                const feedbacks = response.data;
                setFeedbackItems(feedbacks);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="section text-white"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://picsum.photos/1920/1080)',
                    padding: '60px 0'
                }}>
                <div className="container p-5" id="partners">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="mt-3 mb-3">
                                <h1 style={{ marginBottom: "40px", fontSize: '3rem', color: '#f39c12' }}>
                                    User Feedback: Crafting Cinematic Experiences
                                </h1>
                                <p style={{ fontSize: '1.2rem', color: '#bdc3c7', maxWidth: '700px', margin: '0 auto' }}>
                                    Explore how our movie database enhances the viewing journey for film enthusiasts. 
                                    Users share their insights on how our platform has transformed their movie discovery and viewing habits.
                                    From finding hidden gems to creating personalized watchlists, their feedback highlights the joy of our platform.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "50px" }}>
                        <Swiper
                            spaceBetween={30}  // Increase spacing between slides for a more open layout
                            slidesPerView={3}  // Show 3 feedback cards at once
                            loop={true}
                            autoplay={{ delay: 3000 }}
                            modules={[Autoplay]}
                            style={{ paddingBottom: '3rem' }}
                        >
                            {feedbackItems.map((feedback, i) => (
                                <SwiperSlide key={i} style={{ width: 'auto' }}>
                                    <FeedbackItem country={feedback.country} name={feedback.name} message={feedback.feedback} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedbackSection;
