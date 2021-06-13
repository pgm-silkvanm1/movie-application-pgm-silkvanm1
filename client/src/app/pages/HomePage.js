import { BaseLayout } from '../layouts';
import MovieCard from '../components/layout/MovieCard'
import { getMovieListFromApi, getMoviesFromPopular } from '../components/api/API'
import React, {useState} from "react";
import styles from '../components/layout/MovieCard.module.scss';
import PopularMovieList from '../components/detail/PopularMovies'
import TrendingMovieList from '../components/detail/TrendingMovieList'

const HomePage = () => {

  //states- input query, movies
  const [query, setQuery] = useState('');
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);
      
  const searchMovies = async (e) => {
    e.preventDefault();
                     
    try {
      const res = await getMovieListFromApi(query);
      const data  = await res;
      setMovies(data.data.results);
      // console.log(data)
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
      <div className={styles.cardlist}>
          {movies && movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
      <PopularMovieList/>
      <TrendingMovieList/>
    </BaseLayout>
  );
};

export default HomePage;