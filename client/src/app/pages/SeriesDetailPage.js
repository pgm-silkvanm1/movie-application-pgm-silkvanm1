import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BaseLayout } from '../layouts';
import { getSeriesFromId } from '../components/api/API';
import styles from './SeriesDetailPage.module.scss';

const SeriesDetailPage = () => {
  const { id } = useParams();
  const [ detail, setDetail ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSeriesFromId(id);
      console.log(data);
      setDetail(data);
    };

    fetchData();

  }, [id, getSeriesFromId ]);

  return (
    <BaseLayout>
    {!!detail && 
    <div className={styles.detailcard}>
      <div className={styles.poster}>
        <img src ={`https://image.tmdb.org/t/p/original/${detail.data.backdrop_path}`}/>
      </div>
      <div className={styles.movie}>
        <h2>{detail.data.name}</h2>
        <div className={styles.rating}>
          <img src='https://image.flaticon.com/icons/png/512/1828/1828884.png'/>
          <p>
            {detail.data.vote_average}
          </p>
        </div>
        <p>
          {detail.data.overview}
        </p>
        <h4>Tags</h4>
        <ul>
          {detail.data.genres.map(genre => <li key={genre.id}> {genre.name} </li>)}
        </ul>
      </div>
    </div>}
      

    </BaseLayout>
  );
};

export default SeriesDetailPage;