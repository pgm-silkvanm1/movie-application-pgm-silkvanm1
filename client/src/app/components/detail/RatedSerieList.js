import { useState, useEffect } from 'react';
import SerieListItem from './SerieListItem';
import styles from './MovieListItem.module.scss';
import { getSeriesFromRating } from '../api/API';

const TopRatedSerieList = () => {
	const [series, setSeries] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getSeriesFromRating()
			const data = await res
            // console.log(data.data.results)
			setSeries(data.data.results)
		};

		fetchData()
	}, [getSeriesFromRating])

	return (
		<>
			<h1>Top Rated</h1>
			<div className={styles.cardList}>
				{series && series.map((serie) => (
					<SerieListItem serie={serie} key={serie.id} />
				))}
			</div>
		</>
	)
};

export default TopRatedSerieList