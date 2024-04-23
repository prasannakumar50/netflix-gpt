import React, { useEffect } from 'react'
import { API_OPTIONS } from '../constants';

const VideoBackground = ({movieId}) => {

    const getMovieVideos = async()=>{

     const data = await fetch('https://api.themoviedb.org/3/movie/823464/videos?language=en-US',API_OPTIONS)
     const json = await data.json();
     console.log(json)
      
     const filterData = json.results.filter(video => video.type === "Trailer")
     const trailer = filterData.length ? filterData[0] : json.results[0]
     console.log(trailer)

    }

    useEffect(()=>{
        getMovieVideos();
    },[])
     


    
  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XeDbyVODQ5M?si=DTQC9hdr6MePIqM3" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
