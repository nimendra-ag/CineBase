import React from 'react'

const FeedbackItem = (props) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                <div className="wallstyle">
                    <h3>{props.name}</h3>
                    <p>From {props.country}</p>
                    <img
                        src="https://picsum.photos/300/300"
                        className="img-fluid mx-auto d-block"
                        style={{
                            marginBottom: '20px',
                            borderRadius: '50%',
                        
                        }}
                        alt="User"
                    />
                    <hr style={{ height: '3px', backgroundColor: 'white', border: 'none' }} />

                    <p>{props.message}</p>
                </div>
            </div>
        </>
    )
}

export default FeedbackItem