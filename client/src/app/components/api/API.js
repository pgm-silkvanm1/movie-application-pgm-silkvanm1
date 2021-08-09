import axios from 'axios';
import { useEffect, useState } from "react";

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

const getMovieListFromApi = async (query) => {
    const res = axios.get(baseUrl + 'search/movie' , { params: { api_key: apiKey, query: query } });
	return res;
};

const getMoviesFromId = async (id) => {
    const res = axios.get(baseUrl + 'movie/' + id, { params: { api_key: apiKey } });
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
}

// const getDetail =  async (props) => {
//     const match = props.detail.match;
//     const res = axios.get(baseUrl + `tv/${match.params.id}` , { params: { api_key: apiKey } });
//     return res;
// };

// const FetchDetail = (props) => {
//     const match = props.detail.match;
//     const apiKey = process.env.REACT_APP_TMDB_API_KEY;
//     let DETAIL_API = '';
//     let CAST_API = '';

//     if (match.url.indexOf('series') !== -1) {
//         DETAIL_API = `https://api.themoviedb.org/3/tv/${match.params.id}?api_key=${apiKey}`;
//         CAST_API = `https://api.themoviedb.org/3/tv/${match.params.id}/credits?api_key=${apiKey}`
//     }

//     useEffect (() => {
//         FetchDetail();
//         FetchCast();
//     }, []);

//     const [detail, setDetail] = useState({});
//     const [cast, setCast] = useState([]);

//     const FetchDetail = async () => {
//         const res = await fetch(DETAIL_API);
//         const data = await res.json();
//         setDetail(data);
//     };

//     const detailGenres = detail.genres;

//     const FetchCast = async () => {
//         const res = await fetch(CAST_API);
//         const data = await res.json();
//         setCast(data.cast);
//     };

//     console.log(detailGenres)
// };

// const getCastFromApi = async (id) => {
//     const res = axios.get(baseUrl + 'credit/' + id , { params: { api_key: apiKey } })
// 	return res
// };

export { 
    getMovieListFromApi, 
    getMoviesFromId, 
    getGenreFromApi, 
    getMoviesFromKeyword, 
    getMoviesFromTrending, 
    getMoviesFromPopular, 
    getMoviesFromUpcoming,
    getSeriesFromPopular,

}
