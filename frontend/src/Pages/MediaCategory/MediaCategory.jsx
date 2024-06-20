import React, { useContext } from 'react'
import { MediaContext } from '../../Context/MediaContext'
import Item from '../../Components/Item/Item';

const MediaCategory = (props) => {
    const { allMedia } = useContext(MediaContext);
    const categorizedMedia = allMedia.filter(media => media.category === `${props.category}`)
    const randomMedia = categorizedMedia[Math.floor(Math.random() * categorizedMedia.length)];
    console.log(randomMedia)
    return (
        <>
            {
                randomMedia ? <> <div className="hero-image" style={{ backgroundImage: `url(${randomMedia.caroImage})` }}>
                    <div className="hero-text">


                        <div style={{ marginLeft: '100px' }}>
                            <h1 style={{ fontSize: "50px" }}>{randomMedia.name}</h1>
                            <h4>{randomMedia.leadActor}, {randomMedia.supportActor}</h4>
                            <h4>{randomMedia.rating} IMDB Score</h4>
                            <h4>{randomMedia.genre1}, {randomMedia.genre2}</h4>
                            <p>{randomMedia.description}</p>
                            <a href={randomMedia.trailor} target='_blank' className="btn btn-primary"><i className="bi bi-play"></i>Trailor</a>
                        </div>
                    </div>
                </div></> : <></>
            }


            <div className="container-fluid text-center bg-dark text-lidgt p-3 mt-5">
                {/* <div className="row">
                    <div className="col-md-12">
                        <h1><span className="text-danger">100% QUALITY SERVICES</span></h1>
                    </div>
                </div> */}
            </div>

            <section>
                
                <div className="section">
                    <div className="container p-5" id="services">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <div className="row row-cols-1 row-cols-md-4 g-3">
                                    {allMedia.map((media, i) => {
                                        if (props.category === media.category) {
                                            return <Item key={i} media={media} name={media.name} cardImage={media.cardImage} rating={media.rating} trailor={media.trailor} />

                                        }
                                        else {
                                            return null;
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default MediaCategory