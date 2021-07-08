import { useState, useEffect } from 'react';
import MovieListItem from './MovieListItem';
import styles from './MovieListItem.module.scss';
import { getMoviesFromUpcoming } from '../api/API';

const UpcomingMovieList = () => {
	const [movies, setMovies] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getMoviesFromUpcoming()
			const data = await res
            console.log(data.data.results)
			setMovies(data.data.results)
		};

		fetchData()
	}, [getMoviesFromUpcoming])

	return (
		<>
			<h1>Upcoming</h1>
			<div className={styles.cardList}>
				{movies && movies.map((movie) => (
					<MovieListItem movie={movie} key={movie.id} />
				))}
			</div>
		</>
	)
};

export default UpcomingMovieList