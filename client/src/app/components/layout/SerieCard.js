import React from "react";
import styles from './MovieCard.module.scss';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

const SerieCard = ({serie}) => {
    return (
         <div className={styles.card}>
            <Link to={Routes.SERIE_DETAILS.replace(':id', serie.id)}>
                <img className={styles.cardimage}
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${serie.poster_path}`}
                    alt={serie.title + ' poster'}
                    />
                <div className={styles.cardcontent}>
                <h3 className={styles.cardtitle}>{serie.title}</h3>
                <p><small>RELEASE DATE: {serie.release_date}</small></p>
                <p><small>RATING: {serie.vote_average}</small></p>
                <p className={styles.carddesc}>{serie.overview}</p>
                </div>
            </Link>
        </div>
    )
};

export default SerieCard;