import React, { useContext } from 'react'
import { MediaContext } from '../../Context/MediaContext'
import Item from '../../Components/Item/Item';
import './MediaCategory.css'

const MediaCategory = (props) => {
    const { allMedia } = useContext(MediaContext);
    const categorizedMedia = allMedia.filter(media => media.category === `${props.category}`)
    const randomMedia = categorizedMedia[Math.floor(Math.random() * categorizedMedia.length)];
    const genres = ["Romance", "Adventure"];
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

                        {genres.map((genre) => {
                            return (
                                <div className="col-md-12">
                                    <div className="mt-5">
                                        <h1 className="text-start">{genre}</h1>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 col-lg-12">
                                            <div className="row row-cols-1 row-cols-md-4 g-3">
                                                {categorizedMedia.map((media, i) => {
                                                    if (genre === media.genre1) {
                                                        return <Item key={i} media={media} id={media.id} name={media.name} cardImage={media.cardImage} rating={media.rating} trailor={media.trailor} />

                                                    }
                                                    else {
                                                        return null;
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }

                    </div>
                </div>

            </section>
        </>
    )
}

export default MediaCategory