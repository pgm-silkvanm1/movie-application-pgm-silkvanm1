import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { stringify } from "uuid";
import { DetailDetails, DetailReviewList } from "../components/detail";
import { useFirestore } from "../contexts/firebase/firestore.context";
import { BaseLayout } from '../layouts';
import { getDetailById, getMoviesFromId } from '../components/api/API'

const DetailPage = () => {
  const { id } = useParams();
  const [ detail, setDetail ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMoviesFromId(id);
      console.log(data);
      setDetail(data);
    };

    fetchData();    
  }, [id, getMoviesFromId])

  return (
    <BaseLayout>

    {!!detail && 
    <div>
        <img src="detail.afbeeldingUrl"/>
        <h2>detail.title</h2>
        <p>detail.tags</p>
        {/* <img>detail.rating</img> */}
      <p>
        detail.description
      </p>
      <div>
        {/* <img>detail.cast</img> */}
      </div>
    </div>}
      

    </BaseLayout>
  );
};

export default DetailPage;