import { useState, useEffect } from 'react'
import MovieListItem from './MovieListItem'
import { getMovieList, getMovieListFromApi, getMoviesFromPopular } from '../api/API'

const MovieList = ({ filter }) => {
	const [movies, setMovies] = useState()

	useEffect(() => {
		const fetchData = async () => {
			const res = await getMoviesFromPopular()
			console.log(res.data)
			setMovies(res.data)
		}

		fetchData()
	})

	return (
		<div className="movie-list">
			{!!movies &&
				movies.results.map((movie) => {
					return <MovieListItem key={movie.id} movie={movie} />
				})}
		</div>
	)
}

export default MovieList