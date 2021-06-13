import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { stringify } from "uuid";
import { DetailDetails, DetailReviewList } from "../components/detail";
import { useFirestore } from "../contexts/firebase/firestore.context";
import { BaseLayout } from '../layouts';
import { getDetailById, getMoviesFromId } from '../components/api/API'
import styles from './DetailPage.module.scss'

const DetailPage = () => {
  const { id } = useParams();
  const [ detail, setDetail ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMoviesFromId(id);
      console.log(data)
      setDetail(data);
    };

    fetchData();    
  }, [id, getMoviesFromId]);

  return (
    <BaseLayout>
    {!!detail && 
    <div className={styles.detailcard}>
      <div className={styles.poster}>
        <img src ={`https://image.tmdb.org/t/p/original/${detail.data.backdrop_path}`}/>
      </div>
      <div className={styles.movie}>
        <h2>{detail.data.original_title}</h2>
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

export default DetailPage;