import { BaseLayout } from '../layouts';
import MovieCard from '../components/layout/MovieCard';
import { getMultiFromApi } from '../components/api/API';
import React, {useState} from 'react';
import styles from '../components/layout/MovieCard.module.scss';
import MovieList from '../components/detail/MovieList';
import TrendingMovieList from '../components/detail/TrendingMovieList';
import Trailer from '../components/detail/Trailer';

const HomePage = () => {
  //states- input query, movies
  const [query, setQuery] = useState('');
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);
      
  const searchMovies = async (e) => {
    e.preventDefault();
                     
    try {
      const res = await getMultiFromApi(query);
      const data  = await res;
      setMovies(data.data.results);
      // console.log(data)
    }catch(err){
      console.error(err);
    }
  };
      
  return (
    <BaseLayout>
      <form className={styles.form} onSubmit={searchMovies}>
        <label className="label" htmlFor="query"></label>
        <input className="input" type="text" name="query"
          placeholder="i.e. Jurassic Park"
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.gradientbtn1} type="submit">Search</button>
      </form>
      <div className={styles.cardlist}>
          {movies && movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
      <TrendingMovieList/>
      <MovieList/>
      <Trailer/>
    </BaseLayout>
  );
};

export default HomePage;