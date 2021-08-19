import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import styles from './MovieListItem.module.scss';

const MovieListItem = ({ movie }) => {

    const [isShown, setIsShown] = useState(false);

  return (
    <article className={styles.movielistItem} onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}>
      <Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>
      <img className={styles.poster}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'} onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}/>
      </Link>

        <h3 className={styles.title}><Link to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>{ movie.title }</Link>
        </h3>
      {isShown && (
        <div className={styles.overview}>
          { movie.overview }
        </div>
      )}
    </article>
  )
};

export default MovieListItem;