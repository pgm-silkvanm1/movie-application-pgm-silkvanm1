import { BaseLayout } from '../layouts';
import MovieCard from '../components/layout/MovieCard';
import { getMultiFromApi } from '../components/api/API';
import React, {useState} from 'react';
import styles from './HomePage.module.scss';
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
    }catch(err){
      console.error(err);
    }
  };
      
  return (
    <BaseLayout>
        <form className={styles.form} onSubmit={searchMovies}>
            <label className={styles.label} htmlFor="query"></label>
            <input className={styles.input} type="text" name="query"
            placeholder="i.e. Jurassic Park"
            value={query} onChange={(e) => setQuery(e.target.value)}
            />
            <button className={styles.btn1} type="submit" placeholder=""></button>
        </form>
        <div className={styles.cardlist}>
            {movies && movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        <h1 className={styles.title}>Movie DataBase</h1>
        <TrendingMovieList/>
        <MovieList/>
        <Trailer/>
    </BaseLayout>
  );
};

export default HomePage;