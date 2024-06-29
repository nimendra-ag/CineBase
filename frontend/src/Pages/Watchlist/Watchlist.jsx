import React from 'react'
import WatchlistItems from '../../Components/WatchlistItems/WatchlistItems'

const Watchlist = () => {
  return (
    <>
      <section>

        <div className="section">
          <div className="container p-5">
            <div className="row pb-5">
              <div className="col-md-12">
                <div className="mt-5 text-start ms-5 me-5">
                  <h1 style={{ fontSize: '60px' }}>Your Watchlist</h1>
                  <p className="h4 pt-4">
                    Stay entertained by keeping track of your favorite films and TV shows on Your Watchlist! Discover new recommendations, 
                    save your must-watch picks, and organize your viewing list all in one place.                  </p>
                </div>

              </div>
            </div>
            <hr style={{ borderWidth: '4px', color: 'white' }} />
          </div>

          <div className="container p-3">
            <WatchlistItems />
          </div>
        </div>


      </section>
    </>
  )
}

export default Watchlist