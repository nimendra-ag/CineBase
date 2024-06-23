import React, { useContext } from 'react'
import { MediaContext } from '../../Context/MediaContext'
import Item from '../../Components/Item/Item';

const MediaCategory = (props) => {
    const { allMedia } = useContext(MediaContext);
    const categorizedMedia = allMedia.filter(media => media.category === `${props.category}`)
    const randomMedia = categorizedMedia[Math.floor(Math.random() * categorizedMedia.length)];
    const romanceMedia = categorizedMedia.filter(media => media.genre1 === 'Romance');
    const adventureMedia = categorizedMedia.filter(media => media.genre1 === "Adventure")

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
           

            <section>

                <div className="section">
                    <div className="container p-5" id="services">
                        <div className="row pb-5">
                            <h1 className='pb-3'>Adventure</h1>
                            <div className="col-sm-12 col-lg-12">
                                <div className="row row-cols-1 row-cols-md-4 g-3">
                                    {adventureMedia.map((media, i) => {
                                        if ("Adventure" === media.genre1) {
                                            return <Item key={i} media={media} name={media.name} cardImage={media.cardImage} rating={media.rating} trailor={media.trailor} />

                                        }
                                        else {
                                            return null;
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <h1 className='pb-3'>Romance</h1>
                            <div className="col-sm-12 col-lg-12">
                                <div className="row row-cols-1 row-cols-md-4 g-3">
                                    {romanceMedia.map((media, i) => {
                                        if ("Romance" === media.genre1) {
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