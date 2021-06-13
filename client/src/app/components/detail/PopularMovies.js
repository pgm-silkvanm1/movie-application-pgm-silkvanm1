import { useState, useEffect } from 'react'
import MovieListItem from './MovieListItem'
import styles from './MovieListItem.module.scss'
import { getMoviesFromPopular } from '../api/API'

const PopularMovieList = () => {
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
						<MovieListItem movie={movie} key={movie.id} />
					))}
			</div>
		</>
	)
}

export default PopularMovieList
