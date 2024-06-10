import React from 'react'
import Item from '../Item/Item'

const TVShowsComponent = () => {
    return (
        <>
            <div class="row">
                <div class="col-md-12">
                    <div class="mt-5">
                        <h1 class="text-start">Popular TV Shows</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="mt-5">
                        <div class="row">
                            <div class="col-sm-12 col-lg-12">
                                <div class="row row-cols-1 row-cols-md-4 g-3">
                                    <Item />
                                    <Item />
                                    <Item />
                                    <Item />
                                    <Item />
                                    <Item />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5 mb-5 text-center">
              <button type="button" class="btn btn-primary">Primary</button>

            </div>
        </>
    )
}

export default TVShowsComponent