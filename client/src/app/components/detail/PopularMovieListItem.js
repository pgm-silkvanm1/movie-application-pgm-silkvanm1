import { FiFilm } from "react-icons/fi";

import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

import styles from './PopularMovieListItem.module.scss';

const PopularMovieListItem = ({ movie }) => {
  return (
    <article className={styles.movielistItemCard}>
      <Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>
      <img className={styles.poster}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}/>
      </Link>
        <div className={styles.text}>
            <h3 className={styles.title}><Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>{ movie.title }</Link> <span className={styles.numViews}><FiFilm /><span>{ movie.numViews }</span></span>
            </h3>
            <img src='https://image.flaticon.com/icons/png/512/1828/1828884.png'/>
          <p>
            {movie.vote_average}
          </p>
            <p>
                {movie.overview}
            </p>
        </div>
    </article>
  )
};

export default PopularMovieListItem;