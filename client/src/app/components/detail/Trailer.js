import { useState, useEffect } from 'react';
import MovieListItem from './MovieListItem';
import styles from './MovieListItem.module.scss';
import { getVideoFromApi } from '../api/API';

const Trailer = () => {
	const [trailer, setTrailer] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getVideoFromApi()
			const data = await res
            console.log(data.data.results)
			setTrailer(data.results)
		};

		fetchData()
	}, [getVideoFromApi])

	return (
		<>
			<h1>Trailer</h1>
			<div className={styles.cardList}>
				{trailer && trailer.map((trailer) => (
					<MovieListItem trailer={trailer} key={trailer.id} />
				))}
			</div>
		</>
	)
};

export default Trailer