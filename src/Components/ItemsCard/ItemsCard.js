import React, { useEffect, useState } from 'react'
import './ItemsCard.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Contants/Constants'
import YouTube from 'react-youtube'

function ItemsCard(props) {

  const [movies,setMovies] = useState([])
  const [videoid,setVideoId] = useState("")

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      
    setMovies(response.data.results)
 })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {

      autoplay: 1,
    },
  };

  const playTrailer= (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      if(response.data.results.length!==0){
        setVideoId(response.data.results[0])
      }
    })
  }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>

       {
          movies.map((movie,index)=>
        
          <img onClick={()=>playTrailer(movie.id)} className={props.isSmall?'smallPoster':'poster'} key={index} src={`${imageUrl+movie.backdrop_path}`} alt="" />
         )
       }

     
      </div>

     {videoid && <YouTube videoId={videoid.key} opts={opts} onEnd={()=>setVideoId("")} />} 
    </div>
  )
}

export default ItemsCard
