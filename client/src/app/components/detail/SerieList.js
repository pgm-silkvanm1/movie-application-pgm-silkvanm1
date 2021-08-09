import { useState, useEffect } from 'react';
import PopularSerieListItem from './SerieListItem';
import styles from './MovieListItem.module.scss';
import { getSeriesFromPopular } from '../api/API';

const SerieList = () => {
	const [series, setSeries] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getSeriesFromPopular()
			const data = await res
			setSeries(data.data.results)
		};

		fetchData()
	}, [getSeriesFromPopular]);

	return (
		<>
			<h1>Popular</h1>
			<div className={styles.cardList}>
				{series && series.map((serie) => (
					<PopularSerieListItem movie={serie} key={serie.id} />
				))}
			</div>
		</>
	)
};

export default SerieList;