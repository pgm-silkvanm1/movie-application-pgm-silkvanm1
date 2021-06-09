import axios from 'axios'

const getMovieList = async (filter) => {
	const MovieList = [
		{
			title: 'title',
			description: 'ik ben een beschrijving',
			id: '1',
		},
		{
			title: 'title2',
			description:
				'ik ben een beschrijving,ik ben een beschrijvingik ben een beschrijving',
			id: '2',
		},
	]

	return MovieList
}

const baseUrl = 'https://api.themoviedb.org/3/movie/'
const apiKey = process.env.REACT_APP_TMDB_API_KEY

const getMovieListFromApi = async (filter) => {
    const res = axios.get(baseUrl + filter, { params: { api_key: apiKey } })
	return res
}

export { getMovieList, getMovieListFromApi }
