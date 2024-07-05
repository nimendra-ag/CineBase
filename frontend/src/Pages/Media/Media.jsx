import React, { useContext } from 'react'
import { MediaContext } from '../../Context/MediaContext'
import { useParams } from 'react-router-dom';
import MediaDisplay from '../../Components/MediaDisplay/MediaDisplay';
import Reviews from '../../Components/Reviews/Reviews';



const Media = () => {
    const {allMedia} = useContext(MediaContext);
    const {mediaId} = useParams();
    const media = allMedia.find((e) => e.id === Number(mediaId));
  return (
    <>
    <MediaDisplay media={media}/>
    <Reviews mediaId={Number(mediaId)}/>
    </>
  )
}

export default Media