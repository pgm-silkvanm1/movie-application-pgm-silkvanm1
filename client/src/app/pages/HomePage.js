import { BaseLayout } from '../layouts';
import MovieCard from '../components/layout/MovieCard'
import { getMovieListFromApi } from '../components/api/API'
import React, {useState} from "react";

const HomePage = () => {

      //states- input query, movies
      const [query, setQuery] = useState('');
      //create the state for movies, and update that state appropriate
      const [movies, setMovies] = useState([]);
      
      const searchMovies = async (e) => {
          e.preventDefault();
                  
          
          try {
              const res = await getMovieListFromApi();
              const data  = await res.json();
              setMovies(data.results);
              console.log('klik')
          }catch(err){
              console.error(err);
          }
      }
      
  return (
    <BaseLayout>

      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query"></label>
        <input className="input" type="text" name="query"
          placeholder="i.e. Jurassic Park"
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
          {movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>    


      <p>HOME PAGE</p>
      <div>
        {/* <img>Hier komt een carroussel van films/series</img> */}
      </div>

      <h2>
        Trending
      </h2>
      <div>
        {/* <img>Verschillende films/series</img> */}
      </div>

      <h2>Popular</h2>
      <div>
        <div>
          <img/>
          <h3>Movie title</h3>
          {/* <img>Ratings</img> */}
          <p>synopsis </p>
        </div>
      </div>

      <h2>
        Latest trailers
      </h2>
      <div>
        {/* <video>Verschillende films/series hun trailers</video> */}
      </div>
    </BaseLayout>
  );
};

export default HomePage;