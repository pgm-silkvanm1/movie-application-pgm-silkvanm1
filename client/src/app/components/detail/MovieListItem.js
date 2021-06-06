import { FiFilm } from "react-icons/fi";

import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

import styles from './MovieListItem.module.scss';

const MovieListItem = ({ movie }) => {
  return (
    <article class={styles.movielistItem}>
        <h3 className={styles.title}><Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>{ movie.title }</Link></h3>
        <span className={styles.numViews}><FiFilm /><span>{ movie.numViews }</span></span>
    </article>
  )
};

export default MovieListItem;