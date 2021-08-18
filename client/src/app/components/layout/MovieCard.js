import React from "react";
import styles from './MovieCard.module.scss';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

const MovieCard = ({movie}) => {
    return (
         <div className={styles.card}>
            <Link className={styles.link} to={Routes.MOVIE_DETAILS.replace(':id', movie.id)}>
                <img className={styles.cardimage}
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + ' poster'}
                    />
                <div className={styles.cardcontent}>
                <h3 className={styles.cardtitle}>{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p className={styles.carddesc}>{movie.overview}</p>
                </div>
            </Link>
        </div>
    )
};

export default MovieCard;