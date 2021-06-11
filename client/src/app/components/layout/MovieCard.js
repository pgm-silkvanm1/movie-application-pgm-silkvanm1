import React from "react";
import styles from './MovieCard.module.scss';

const MovieCard = ({movie}) => {

    return (
         <div className={styles.card}>
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

        </div>
    )
}

export default MovieCard;