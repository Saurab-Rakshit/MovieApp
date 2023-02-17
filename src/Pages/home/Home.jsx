import { useEffect,useState } from "react";
import Axios from "axios";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../Components/movieList/MovieList";

const Home = () => {
  useEffect(()=>{
    Axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      ).then((resp)=>setPopularMovies(resp.data.results))
  },[])
  const [popularMovies,setPopularMovies] = useState([])
  console.log(popularMovies);
  
  return( 
    <div className="poster">
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}    
        >
        {
            popularMovies.map((movie,index)=>(
                <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} key={index}>
                <div className="posterImage">
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="no_img" />
                </div>
                <div className="posterImage__overlay">
                    <div className="posterImage__title">{movie.original_title}</div>
                    <div className="posterImage__runtime">
                        {movie.release_date}
                        <span className="posterImage__rating">
                            {movie.vote_average}
                            <i className="fas fa-star"/>
                        </span>
                    </div>
                    <div className="posterImage__description">
                        {movie.overview}
                    </div>

                </div>
                </Link>
            ))
        }
        </Carousel>
        <MovieList/>
    </div>
  );
};

export default Home;
