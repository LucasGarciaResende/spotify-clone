import React from 'react'
import ItemList from './ItemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Main = ({ type }) => {
  return (
    
    <div className='main'>
      {type === "Artists" || type === undefined ? (
      <ItemList 
        title="Artistas Populares" 
        items={5} 
        itemsArray={artistArray} 
        path='/artists'
        idPath='/artist'
        />
        ) : (
          <></>
        ) }
     
      {type === "Songs" || type === undefined ? (
        <ItemList 
        title="Músicas Populares" 
        items={10} 
        itemsArray={songsArray} 
        path='songs'
        idPath='/song'
        />
        ) : (
          <></>
        ) }
    </div>
  )
}

export default Main
