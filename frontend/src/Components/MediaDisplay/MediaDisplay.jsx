import React, { useContext } from 'react'
import { MediaContext } from '../../Context/MediaContext'
import { useParams } from 'react-router-dom';

const MediaDisplay = (props) => {

    window.scrollTo(0, 0)
    const { media } = props;
    const { addtoWatchlist } = useContext(MediaContext);
    return (

        <>
            {media ? <>
                <div style={{ paddingTop: "90px", backgroundColor: "rgb(31,31,31)", position: "relative", overflow: "hidden" }}>
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${media.displayImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(20px)",
                        zIndex: 1,
                        opacity: 0.7
                    }}></div>
                    <div className="container" style={{ position: "relative", zIndex: 2 }}>
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-12" style={{ position: "relative", display: "inline-block" }}>
                                <img src={media.displayImage} alt="" className="img-fluid" style={{ borderRadius: "8px" }} />
                                <button
                                    className="btn btn-primary btn-lg"
                                    style={{
                                        position: "absolute",
                                        left: "12px",
                                        top: "0px", /* Adjust top position for better alignment */
                                        borderTopLeftRadius: "8px", /* Rounded top left corner */
                                        borderTopRightRadius: "5px", /* Rounded top right corner */
                                        borderBottomRightRadius: "5px", /* Rounded bottom right corner */
                                        borderBottomLeftRadius: "5px", /* Rounded bottom left corner */
                                        padding: "0px 0px", /* Keep padding for better button appearance */
                                        fontSize: "32px", /* Keep font size for better readability */
                                        fontWeight: "bold", /* Keep text bold for emphasis */
                                        color: "white", /* Keep text color to white */
                                        backgroundColor: "rgba(235,235,235, 0.8)", /* Set background color with transparency */
                                        border: "none", /* Remove border */
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", /* Keep shadow for depth */
                                        transition: "background-color 0.3s, transform 0.3s", /* Keep transition effect */
                                        cursor: "pointer" /* Keep cursor as pointer on hover */
                                    }}
                                    onClick={() => { addtoWatchlist(media.id) }}
                                >
                                    <i className="bi bi-bookmark-plus-fill" style={{ color: "rgba(44, 44, 44)" }}></i>
                                </button>
                            </div>

                            <div className="col-lg-7 col-md-12 col-12 ps-lg-5 mt-md-1">
                                <div style={{ marginBottom: "10px" }}>
                                    <h2 className="text-start display-4 mb-4" style={{ fontWeight: "300" }}>{media.name}</h2>
                                    <h6>{media.releasedYear} . <span className='border rounded p-1'>{media.genre1}</span>  <span className='border rounded p-1' style={{ marginLeft: "2px" }}>{media.genre2}</span></h6>
                                    <p className="text-start lead" style={{ marginTop: "20px" }}>
                                        {media.description}
                                    </p>
                                </div>
                                <div className="container" style={{ marginTop: "10px" }}>
                                    <div className="row">
                                        <div style={{ marginTop: "20px", backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: "8px", padding: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                                            <ul className="list-group list-group-flush" style={{ color: "#f8f9fa", fontSize: "16px" }}>
                                                <li className="list-group-item" style={{ backgroundColor: "transparent", border: "none", color: "#f8f9fa", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>iMDB Rating: {media.rating}</li>
                                                <li className="list-group-item" style={{ backgroundColor: "transparent", border: "none", color: "#f8f9fa", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>Director: {media.director}</li>
                                                <li className="list-group-item" style={{ backgroundColor: "transparent", border: "none", color: "#f8f9fa", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>Stars: {media.leadActor}, {media.supportActor}</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="container text-start" style={{ marginTop: "30px", position: "relative" }}>
                                    <iframe
                                        width="320"
                                        height="240"
                                        src={media.trailor}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        style={{
                                            borderRadius: "8px", /* Add border radius for rounded corners */
                                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", /* Add shadow for depth */
                                            position: "relative", /* Positioning for z-index stacking */
                                            zIndex: "1" /* Ensure iframe is above background */
                                        }}
                                    ></iframe>
                                    <div
                                        style={{
                                            position: "absolute", /* Position the overlay on top of the iframe */
                                            top: "0", /* Align to the top */
                                            left: "0", /* Align to the left */
                                            right: "0", /* Align to the right */
                                            bottom: "0", /* Align to the bottom */
                                            backgroundImage: `url(${media.displayImage})`, /* Set background image */
                                            backgroundSize: "cover", /* Cover the entire area */
                                            filter: "blur(20px)", /* Apply blur effect */
                                            zIndex: "-1", /* Place behind iframe */
                                            opacity: "0.7" /* Adjust opacity */
                                        }}
                                    ></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </> : <>No media found</>}

        </>


    )
}

export default MediaDisplay