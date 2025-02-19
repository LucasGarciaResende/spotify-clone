import React from 'react'
import Header from '../components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

const Song = () => {
  const { id } = useParams();
  const songId = id;
  
  const song = songsArray.find(
    (currentSongObj) => currentSongObj._id === songId
  );
  
  if (!song) {
  return <div>Song not found</div>;
  }
  
  const { image, name, duration, artist, audio } = song;
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];
  const songsArrayArtist = songsArray.filter(
    (currentSongsObj, index) => currentSongsObj.artist === artist
  );
  const randomIndex = Math.floor(Math.random() * (songsArrayArtist.length - 1));
  const randomIdArtist = songsArrayArtist[randomIndex]._id
  const randomIndex2 = Math.floor(Math.random() * (songsArrayArtist.length - 1));
  const randomIdArtist2 = songsArrayArtist[randomIndex2]._id
  
  
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img 
            src={image} 
            alt={`Imagem da Músca ${name}`}/>
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/song/${artistObj._id}`}>
          <img 
            src={artistObj.image}
            width={75}
            height={75}
            alt={`Imagem do Artista ${artistObj.name}`}
          />
        </Link>
        <div className='player'>
          <Player 
            duration={duration} 
            randomIdArtist = {randomIdArtist} 
            randomIdArtist2 = {randomIdArtist2}
            audio = {audio}
          />
        </div>
        <div>
          <p className='song__name'>{name}</p>
          <p>{artistObj.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Song