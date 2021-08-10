// import { FiFilm } from "react-icons/fi";
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import styles from './MovieListItem.module.scss';

const SerieListItem = ({ serie }) => {
  return (
    <article className={styles.movielistItem}>
      <Link to={Routes.SERIE_DETAILS.replace(':id', serie.id)}>
      <img className={styles.poster}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${serie.poster_path}`}
        alt={serie.name + ' poster'}/>
      </Link>

        <h3 className={styles.title}><Link to={Routes.SERIE_DETAILS.replace(':id', serie.id)}>{ serie.name }</Link>
        <span className={styles.numViews}>
          <span>{ serie.numViews }</span>
        </span>
        </h3>
    </article>
  )
};

export default SerieListItem;