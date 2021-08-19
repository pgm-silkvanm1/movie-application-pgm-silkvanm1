import { BaseLayout } from '../layouts';
import MovieCard from '../components/layout/MovieCard';
import { getMovieListFromApi } from '../components/api/API';
import React, {useState} from 'react';
import styles from './HomePage.module.scss';
// import styles from '../components/layout/MovieCard.module.scss';
import { MovieList } from '../components/detail';
import TrendingMovieList from '../components/detail/TrendingMovieList';
import UpcomingMovieList from '../components/detail/UpcomingMovieList';

const FilmsPage = () => {
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
  };
	return (
		<BaseLayout>
            <form className={styles.form} onSubmit={searchMovies}>
                <label className={styles.label} htmlFor="query"></label>
                <input className={styles.input} type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className={styles.btn1} type="submit"></button>
            </form>
            <div className={styles.cardlist}>
                {movies && movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            <h1 className={styles.title}>MOVIES</h1>
			<UpcomingMovieList/>
			<MovieList/>
			<TrendingMovieList/>
		</BaseLayout>
	)
};

export default FilmsPage;
