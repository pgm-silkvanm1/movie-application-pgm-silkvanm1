import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailDetails, DetailReviewList } from "../components/detail";
import { useFirestore } from "../contexts/firebase/firestore.context";
import { BaseLayout } from '../layouts';

const DetailPage = () => {
  const { id } = useParams();
  const [ detail, setDetail ] = useState();
  const { getDetailById } = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetailById(id);
      setDetail(data);
    };

    fetchData();    
  }, [id, getDetailById])

  return (
    <BaseLayout>
      {!!detail && <DetailDetails detail={detail} /> }
      {!!detail && <DetailReviewList detailId={detail.uid} /> }
      <img>
        Hier komt een foto van de film/serie
      </img>
      <h2>Movie title</h2>
      <p>tags, tags, tags</p>
      <img>Ratings</img>
      <p>Director: </p>
      <p>Writer:</p>
 
      <p>
        Hier komt de synopsis van de film/serie
      </p>

      <div>
        <div>
          <img>Castafbeeldingen</img>
        </div>
        <div>
          <img>Reviews</img>
        </div>
        <div>
          <video>Trailer</video>
        </div>
      </div>

    </BaseLayout>
  );
};

export default DetailPage;