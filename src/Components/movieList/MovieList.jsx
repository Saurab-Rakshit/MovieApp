import {useEffect,useState} from 'react'
import './movieList.css';
import Card from '../Card/Card';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const MovieList = () => {

    const [movieList,setMovieList] = useState([])
    const {type} = useParams()
    
    useEffect(()=>{
        getData();
    },[])
    
    useEffect(()=>{
        getData()
    },[type])
    
    const getData = ()=>{
        Axios.get(
            `https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        ).then((resp)=>setMovieList(resp.data.results))
    }
  return (
    <>
      <div className="movie__list">
        <h2 className="list__title">{(type?type:"POPULAR").toUpperCase()}</h2>
         <div className="list__cards">
            {
                movieList.map((movie,i)=>(
                    <Card movie={movie} key={i}/>
                ))
            }
         </div>           
      </div>
    </>
  )
}

export default MovieList
