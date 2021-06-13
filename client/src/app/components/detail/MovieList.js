import { useState, useEffect } from 'react'
import PopularMovieListItem from './MovieListItem'
import styles from './MovieListItem.module.scss'
import { getMoviesFromPopular } from '../api/API'

const MovieList = () => {
	const [movies, setMovies] = useState()

	useEffect(() => {
		const fetchData = async () => {
			const res = await getMoviesFromPopular()
			const data = await res
			setMovies(data.data.results)
		}

		fetchData()
	}, [getMoviesFromPopular])

	return (
		<>
			<h1> Popular</h1>
			<div className={styles.cardList}>
				{movies &&
					movies.map((movie) => (
						<PopularMovieListItem movie={movie} key={movie.id} />
					))}
			</div>
		</>
	)
}

export default MovieList
