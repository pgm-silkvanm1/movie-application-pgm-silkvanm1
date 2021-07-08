import { useState, useEffect } from 'react';
import MovieListItem from './MovieListItem';
import styles from './MovieListItem.module.scss';
import { getMoviesFromTrending } from '../api/API';

const TrendingMovieList = () => {
	const [movies, setMovies] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getMoviesFromTrending()
			const data = await res
            console.log(data.data.results)
			setMovies(data.data.results)
		};

		fetchData()
	}, [getMoviesFromTrending])

	return (
		<>
			<h1>Trending</h1>
			<div className={styles.cardList}>
				{movies && movies.map((movie) => (
					<MovieListItem movie={movie} key={movie.id} />
				))}
			</div>
		</>
	)
};

export default TrendingMovieList