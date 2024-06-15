import React, { useContext } from 'react'
import Item from '../Item/Item'
import { MediaContext } from '../../Context/MediaContext';

const PopularInThisWeek = () => {
  
  const { allMedia } = useContext(MediaContext);
  const popularMedia = allMedia.sort(() => Math.random() - 0.5).slice(0, 6);
  console.log(popularMedia)

  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="mt-5">
            <h1 class="text-start">Popular in this week</h1>
          </div>
        </div>


      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="mt-5">
            <div class="row">
              <div class="col-sm-12 col-lg-12">

                <div class="row row-cols-1 row-cols-md-4 g-3">

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