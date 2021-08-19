import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import styles from './PopularMovieListItem.module.scss';

const PopularSerieListItem = ({ serie }) => {
  return (
    <article className={styles.movielistItemCard}>
        <Link to={Routes.SERIE_DETAILS.replace(':id', serie.id)}>
        <img className={styles.poster}
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${serie.poster_path}`}
            alt={serie.title + ' poster'}/>
        </Link>
        <div className={styles.text}>
            <h3 className={styles.title}><Link to={Routes.SERIE_DETAILS.replace(':id', serie.id)}>{ serie.title }</Link>
            </h3>
            {/* <img src='https://image.flaticon.com/icons/png/512/1828/1828884.png'/> */}
            <p>
                {serie.vote_average}
            </p>
            <p>
                {serie.overview}
            </p>
        </div>
    </article>
  )
};

export default PopularSerieListItem;