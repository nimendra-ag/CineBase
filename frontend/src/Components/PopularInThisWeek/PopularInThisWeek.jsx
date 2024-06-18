import React, { useContext } from 'react'
import Item from '../Item/Item'
import { MediaContext } from '../../Context/MediaContext';

const PopularInThisWeek = () => {
  
  const { allMedia } = useContext(MediaContext);
  const popularMedia = allMedia.sort(() => Math.random() - 0.5).slice(0, 6);
  console.log(popularMedia)

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

                  {popularMedia.map((media, i) => {
                    return <Item key={i} id={media.id} media={media} name={media.name} cardImage={media.cardImage} rating={media.rating} trailor={media.trailor} />
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

export default PopularInThisWeek