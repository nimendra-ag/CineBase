import React from 'react'

const Item = () => {
    return (
        <>
            <div class="col col-md-4 col-lg-2 col-xl-2">
                <div class="card h-100">
                    <img src="https://picsum.photos/300/440" class="card-img-top"
                        alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Spider Man</h5>
                        <p><i class="bi bi-star-fill"></i> 5.5</p>
                        <a href="#" class="btn btn-primary"><i class="bi bi-bookmark-plus"></i> Watchlist</a>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary"><i class="bi bi-play"></i> Trailor</a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Item