import { BaseLayout } from '../layouts';
import SerieCard from '../components/layout/SerieCard';
import { getSeriesFromApi } from '../components/api/API';
import React, {useState} from 'react';
import styles from './HomePage.module.scss';
// import styles from '../components/layout/MovieCard.module.scss';
import SerieList from '../components/detail/SerieList';
import LatestSerieList from '../components/detail/LatestSerieList';
import RatedSerieList from '../components/detail/RatedSerieList';

const SeriesPage = () => {
    //states- input query, movies
  const [query, setQuery] = useState('');
  //create the state for movies, and update that state appropriate
  const [series, setSeries] = useState([]);
      
  const searchSeries = async (e) => {
    e.preventDefault();
                     
    try {
      const res = await getSeriesFromApi(query);
      const data  = await res;
      setSeries(data.data.results);
      // console.log(data)
    }catch(err){
      console.error(err);
    }
  };
      
  return (
    <BaseLayout>
      <form className={styles.form} onSubmit={searchSeries}>
        <label className={styles.label} htmlFor="query"></label>
        <input className={styles.input} type="text" name="query"
          placeholder="i.e. Loki"
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.btn1} type="submit"></button>
      </form>
      <div className={styles.cardlist}>
          {series && series.map(serie => (
            <SerieCard serie={serie} key={serie.id} />
          ))}
      </div>
      <h1 className={styles.title}>SERIES</h1>
			<SerieList/>
			<RatedSerieList/>
            <LatestSerieList/>
		</BaseLayout>
	)
};

export default SeriesPage;