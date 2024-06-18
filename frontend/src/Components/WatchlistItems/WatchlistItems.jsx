import React, { useContext } from 'react'
import WatchlistCard from '../WatchlistCard/WatchlistCard'
import { MediaContext } from '../../Context/MediaContext'

const WatchlistItems = () => {
    const {allMedia, watchlist, addtoWatchlist, removeFromWatchlist} = useContext(MediaContext);
    return (
        <>
        <div className="row">
          <div className="col-md-12">
            <div className="mt-5">
              <h1 className="text-start">Popular in this week</h1>
            </div>
          </div>
  
  
        </div>
  
        <div className="row">
          <div className="col-md-12">
            <div className="mt-5">
              <div className="row">
                <div className="col-sm-12 col-lg-12">
  
                  <div className="row row-cols-1 row-cols-md-4 g-3">
  
                    {allMedia.map((media) => {
                      if(watchlist[media.id]){
                        return <WatchlistCard key={media.id} id={media.id} media={media} name={media.name} cardImage={media.cardImage} rating={media.rating} trailor={media.trailor} />
                      }
                      return null;
                    })}
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default WatchlistItems