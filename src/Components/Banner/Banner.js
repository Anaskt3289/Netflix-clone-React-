import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Contants/Constants'

function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
    let x = Math.floor((Math.random() * 10) + 0);
 axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
   setMovie(response.data.results[x])
 })
  },[])
  return (
    <div className='banner'
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} >
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>
        </div>
        <div className="bottom_fade"></div>
    </div>
  )
}

export default Banner
