import { useState, useEffect } from 'react'
import MovieListItem from './MovieListItem'
import { useFirestore } from '../../contexts/firebase/firestore.context'

const MovieList = ({ filter }) => {
	const [movies, setMovies] = useState()
	const { getMovieList } = useFirestore()

	useEffect(() => {
		const fetchData = async () => {
			const data = await getMovieList(filter)
			setMovies(data)
		}

		fetchData()
	})

	return (
		<div className="movie-list">
			{!!movies &&
				movies.map((movie) => {
					return <MovieListItem key={movie.id} movie={movie} />
				})}
		</div>
	)
}

export default MovieList
