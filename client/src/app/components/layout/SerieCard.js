import React , {useState } from "react";
import styles from './MovieCard.module.scss';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

const SerieCard = ({serie}) => {

    const [isShown, setIsShown] = useState(false);

    return (
         <div className={styles.card}>
            <Link className={styles.link} to={Routes.SERIE_DETAILS.replace(':id', serie.id)}>
                <img className={styles.cardimage}
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${serie.poster_path}`}
                    alt={serie.title + ' poster'} onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    />
                <div className={styles.cardcontent}>
                    <h3 className={styles.cardtitle}>{ serie.name }</h3>
                    {isShown && (
                        <div className={styles.overview}>
                            <p><small>RATING: {serie.vote_average}</small></p>
                            <p className={styles.carddesc}>{serie.overview}</p>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    )
};

export default SerieCard;