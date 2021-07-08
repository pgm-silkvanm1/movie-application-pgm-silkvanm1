import { FiFilm } from "react-icons/fi";
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import styles from './MovieListItem.module.scss';

const MovieListItem = ({ movie }) => {
  return (
    <article className={styles.movielistItem}>
      <Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>
      <img className={styles.poster}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}/>
      </Link>

        <h3 className={styles.title}><Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>{ movie.title }</Link>
        <span className={styles.numViews}><FiFilm />
          <span>{ movie.numViews }</span>
        </span>
        </h3>
    </article>
  )
};

export default MovieListItem;