import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateMovie.css'
import axios from 'axios';
import { useEffect } from 'react';


const UpdateMovie = () => {
    
    const [mediaData, setMediaData] = useState({});

    const {mediaId} = useParams();
    
    const getMedia = async (mediaId) => {
        const data = {};
        try {
            const response = await axios.get(`http://localhost:4000/media/${mediaId}`);
            return response.data[0];
        } catch (error) {
            console.log(error);
        }
        return data;
    };

    useEffect(() => {
        const fetchMedia = async () => {
            const data = await getMedia(mediaId);
            setMediaData(data);
        };

        fetchMedia();
    }, [mediaId]);
    console.log(mediaData);

    const changeHandler = (e) => {
        setMediaData({ ...mediaData, [e.target.name]: e.target.value })
    }

    
    const update_Media = async () => {
        console.log(mediaData);
        let media = mediaData;


        try {
            const response = await axios.put(`http://localhost:4000/updatemedia/${mediaId}`, mediaData, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success) {
                alert("Media Updated");
            } else {
                alert("Failed to update media");
            }
        } catch (error) {
            console.error('Error updating media:', error.response ? error.response.data : error.message);
            alert("Failed to update Media");
        }
        

    }
  return (
    <div className='add-product'>
    <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Name</p>
            <input value={mediaData.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />

        </div>
        <div className="addproduct-itemfield">
            <p>Released Year</p>
            <input value={mediaData.releasedYear} onChange={changeHandler} type="text" name='releasedYear' placeholder='Type here' />
        </div>
    </div>
    <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Lead Actor</p>
            <input value={mediaData.leadActor} onChange={changeHandler} type="text" name='leadActor' placeholder='Type here' />

        </div>
        <div className="addproduct-itemfield">
            <p>Support Actor</p>
            <input value={mediaData.supportActor} onChange={changeHandler} type="text" name='supportActor' placeholder='Type here' />
        </div>
    </div>
    <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Youtube Trailor Link</p>
            <input value={mediaData.trailor} onChange={changeHandler} type="text" name='trailor' placeholder='Type here' />

        </div>
        <div className="addproduct-itemfield">
            <p>Director</p>
            <input value={mediaData.director} onChange={changeHandler} type="text" name='director' placeholder='Type here' />
        </div>
    </div>

    <div className="addproduct-itemfield">
        <p>Description</p>
        <textarea value={mediaData.description} onChange={changeHandler} type="text" name='description' placeholder='Type here' />
    </div>

    <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>IMDB Rating</p>
            <input value={mediaData.rating} onChange={changeHandler} type="text" name='rating' placeholder='Type here' />

        </div>

        <div className="addproduct-itemfield">
            <p>Genre 1</p>
            <select value={mediaData.genre1} onChange={changeHandler} name="genre1" className='add-product-selector'>
                <option value="Drama">Drama</option>
                <option value="Adventure">Adventure</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Romance">Romance</option>
                <option value="Comady">Comady</option>
                <option value="Action">Action</option>
                <option value="Fantasy">Fantasy</option>
            </select>

        </div>
        <div className="addproduct-itemfield">
            <p>Genre 2</p>
            <select value={mediaData.genre2} onChange={changeHandler} name="genre2" className='add-product-selector'>
                <option value="Drama">Drama</option>
                <option value="Adventure">Adventure</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Romance">Romance</option>
                <option value="Comady">Comady</option>
                <option value="Action">Action</option>
                <option value="Fantasy">Fantasy</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <p>Category</p>
            <select value={mediaData.category} onChange={changeHandler} name="category" className='add-product-selector'>
                <option value="TVShow">TV Show</option>
                <option value="Movie">Movie</option>
            </select>
        </div>

    </div>


    <button onClick={() => { update_Media() }} className='addproduct-button'>ADD</button>
</div>
  )
}

export default UpdateMovie