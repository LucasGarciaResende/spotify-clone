import React from 'react'
import Header from '../components/Header'
import { SongList } from '../components/SongList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Artist = () => {
  const { id } = useParams();
  const { name, banner } = artistArray.filter(
    (currentArtistObj, index) => currentArtistObj._id === id
  )[0];
  const songsArrayArtist = songsArray.filter(
    (currentSongsObj, index) => currentSongsObj.artist === name
  );
  const randomIndex = Math.floor(Math.random() * (songsArrayArtist.length - 1));
  const randomIdArtist = songsArrayArtist[randomIndex]._id;
  
  return (
    <div className="artist">
      <div className="artist__header" style = {{
        backgroundImage : 
        `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`
        }}>
        <h2 className='artist__title'>{name}</h2>
      </div>
        
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray = {songsArrayArtist} />
      </div>
      
      <Link to = {`/song/${randomIdArtist}`}>
        <FontAwesomeIcon 
          className="single-item__icon single-item__icon--artist" 
          icon={faCirclePlay} />
      </Link>
    </div>
  )
}

export default Artist