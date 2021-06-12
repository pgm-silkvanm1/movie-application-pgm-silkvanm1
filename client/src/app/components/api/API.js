import axios from 'axios'


const baseUrl = 'https://api.themoviedb.org/3/'
const apiKey = process.env.REACT_APP_TMDB_API_KEY

const getMovieListFromApi = async (query) => {
    const res = axios.get(baseUrl + 'search/movie' , { params: { api_key: apiKey, query: query } })
	return res
}

const getMoviesFromId = async (id) => {
    const res = axios.get(baseUrl + 'movie/' + id, { params: { api_key: apiKey } })
	return res
}

const getGenreFromApi = async (filter) => {
    const res = axios.get(baseUrl + 'genre/movie/list/' + filter , { params: { api_key: apiKey } })
	return res
}

const getMoviesFromKeyword = async (id) => {
    const res = axios.get(baseUrl + 'keyword/' + id , { params: { api_key: apiKey } })
	return res
}

const getMoviesFromTrending = async () => {
    const res = axios.get(baseUrl + 'trending/all/', + 'week' , { params: { api_key: apiKey } })
    return res
}

export { getMovieListFromApi, getMoviesFromId, getGenreFromApi, getMoviesFromKeyword, getMoviesFromTrending }
