import { useState, useEffect } from 'react';
import SerieListItem from './SerieListItem';
import styles from './MovieListItem.module.scss';
import { getSeriesFromLatest } from '../api/API';

const LatestSerieList = () => {
	const [series, setSeries] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getSeriesFromLatest()
			const data = await res
            console.log(data)
			setSeries(data.data.results)
		};

		fetchData()
	}, [getSeriesFromLatest])


	return (
		<>
			<h1>Latest</h1>
			<div className={styles.cardList}>
				{series && series.map((serie) => (
					<SerieListItem serie={serie} key={serie.id} />
				))}
			</div>
		</>
	)
};

export default LatestSerieList