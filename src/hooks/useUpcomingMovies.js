import { useDispatch } from "react-redux";
import { addPopularMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useUpcomingMovies = ()=>{

    //Fetch  Data from TMDB api
    const dispatch = useDispatch(); 

    const getUpcomingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
        const json =await data.json();
        //console.log(json.results)
        dispatch(addUpcomingMovies(json.results))
    }

      useEffect(()=>{
        getUpcomingMovies();
      },[])
}

export default useUpcomingMovies;