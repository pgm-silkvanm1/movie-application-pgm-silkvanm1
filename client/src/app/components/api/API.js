import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

const getMovieListFromApi = async (query) => {
    const res = axios.get(baseUrl + 'search/movie' , { params: { api_key: apiKey, query: query } });
	return res;
};

const getSeriesFromApi = async (query) => {
    const res = axios.get(baseUrl + 'search/tv' , { params: { api_key: apiKey, query: query } });
    return res;
};

const getMultiFromApi = async (query) => {
    const res = axios.get(baseUrl + 'search/multi' , { params: { api_key: apiKey, query: query } });
    return res;
};




const getVideoFromApi = async () => {
    const res = axios.get(baseUrl + `movie/436969/videos` , { params: { api_key: apiKey } });
    return res;
};

const getMoviesFromId = async (id) => {
    const res = axios.get(baseUrl + 'movie/' + id, { params: { api_key: apiKey } });
	return res;
};

const getSeriesFromId = async (id) => {
    const res = axios.get(baseUrl + 'tv/' + id, { params: { api_key: apiKey } });
	return res;
};





const getGenreFromApi = async (filter) => {
    const res = axios.get(baseUrl + 'genre/movie/list/' + filter , { params: { api_key: apiKey } });
	return res;
};

const getMoviesFromKeyword = async (id) => {
    const res = axios.get(baseUrl + 'keyword/' + id , { params: { api_key: apiKey } });
	return res;
};





const getMoviesFromTrending = async () => {
    const res = axios.get(baseUrl + 'trending/all/week' , { params: { api_key: apiKey } });
    return res;
};

const getMoviesFromPopular = async () => {
    const res = axios.get(baseUrl + 'discover/movie?sort_by=popularity.desc' , { params: { api_key: apiKey } });
    return res;
};

const getMoviesFromUpcoming = async () => {
    const res = axios.get(baseUrl + 'movie/upcoming' , { params: { api_key: apiKey } });
    return res;
};

const getSeriesFromPopular = async () => {
    const res = axios.get(baseUrl + 'discover/tv?sort_by=popularity.desc' , { params: { api_key: apiKey } });
    return res;
};

const getSeriesFromRating = async () => {
    const res = axios.get(baseUrl + 'tv/top_rated' , { params: { api_key: apiKey } });
    return res;
};

const getSeriesFromLatest = async () => {
    const res = axios.get(baseUrl + 'tv/latest' , { params: { api_key: apiKey } });
    return res;
};

export { 
    getMovieListFromApi,
    getSeriesFromApi,
    getMultiFromApi,
    getVideoFromApi,
    getMoviesFromId,
    getSeriesFromId,
    getGenreFromApi, 
    getMoviesFromKeyword, 
    getMoviesFromTrending, 
    getMoviesFromPopular, 
    getMoviesFromUpcoming,
    getSeriesFromPopular,
    getSeriesFromRating,
    getSeriesFromLatest,

}
