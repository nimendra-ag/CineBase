import React, { useContext } from 'react'
import { MediaContext } from '../../Context/MediaContext'
import { useParams } from 'react-router-dom';

const MediaDisplay = (props) => {

    const { media } = props;
    const { addtoWatchlist } = useContext(MediaContext);
    return (

        <>
            {media ? <><div style={{ marginTop: "90px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-12" style={{
                            position: 'relative',
                            display: 'inline-block'
                        }}>
                            <img src={media.displayImage} alt="" className="img-fluid" />

                            <button className="btn btn-primary btn-lg" style={{
                                position: 'absolute',
                                left: '13px',
                                borderRadius: '0px',
                                padding: '0px'
                            }}
                            onClick={()=>{addtoWatchlist(media.id)}}
                            ><i className="bi bi-bookmark-plus-fill"></i></button>

                        </div>
                        <div className="col-lg-7 col-md-12 col-12 ps-lg-5 mt-md-1">
                            <div style={{ marginBottom: "10px" }}>
                                <h2 className="text-start display-4" style={{ fontWeight: '900px' }}>{media.name}</h2>
                                <h6>{media.releasedYear} . <span className='border rounded p-1' style={{ backgroundColor: '' }}>{media.genre1}</span> <span className='border rounded p-1' style={{ backgroundColor: '', marginLeft: '2px' }}>{media.genre2}</span></h6>
                                <p className="text-start lead" style={{ marginTop: "20px" }}>
                                    {media.description}
                                </p>

                            </div>
                            <div className="container" style={{ marginTop: "10px" }}>
                                <div className="row">
                                    <div className="">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">iMDB Rating: {media.rating}</li>
                                            <li className="list-group-item">Director: {media.director}</li>
                                            <li className="list-group-item">Stars: {media.leadActor}, {media.supportActor}</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="container text-start" style={{ marginTop: "30px" }}>
                                <iframe width="320" height="240" src={media.trailor} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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