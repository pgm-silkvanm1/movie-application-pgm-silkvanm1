import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import styles from './MovieListItem.module.scss';

const SerieListItem = ({ serie }) => {

    const [isShown, setIsShown] = useState(false);

  return (
    <article className={styles.movielistItem} onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}>
      <Link to={Routes.SERIE_DETAILS.replace(':id', serie.id)}>
      <img className={styles.poster}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${serie.poster_path}`}
        alt={serie.name + ' poster'}/>
      </Link>

        <h3 className={styles.title}><Link to={Routes.SERIE_DETAILS.replace(':id', serie.id)}>{ serie.name }</Link>
        </h3>
        {isShown && (
        <div className={styles.overview}>
          { serie.overview }
        </div>
      )}
    </article>
  )
};

export default SerieListItem;