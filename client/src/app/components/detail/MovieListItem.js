import { FiFilm } from "react-icons/fi";

import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

import styles from './MovieListItem.module.scss';

const MovieListItem = ({ movie }) => {
  return (
    <article class={styles.movielistItem}>
        <h3 className={styles.title}><Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>{ movie.title }</Link></h3>
        <img className={styles.poster}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}/>
        <span className={styles.numViews}><FiFilm /><span>{ movie.numViews }</span></span>
        <p className={styles.carddesc}>{movie.overview}</p>
    </article>
  )
};

export default MovieListItem;