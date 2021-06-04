import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { stringify } from "uuid";
import { DetailDetails, DetailReviewList } from "../components/detail";
import { useFirestore } from "../contexts/firebase/firestore.context";
import { BaseLayout } from '../layouts';

const DetailPage = () => {
  const { id } = useParams();
  const [ detail, setDetail ] = useState();
  const { getDetailById } = useFirestore();

  const data = {
    title: "filmtitel",
    afbeeldingUrl: "foto",
    description: "synopsis",
    rating: 5,
    views: 142,
    cast: ["a","b","c"],
    tags: ["a","b","c"],
    wishlist: true,
    comments: [{
      user: "naam",
      content: "Hier komt een comment",
      date: Date()
    }],
    date: Date()
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetailById(id);
      setDetail(data);
    };

    fetchData();    
  }, [id, getDetailById])

  return (
    <BaseLayout>

    {!!detail && 
    <div>
        <img src="detail.afbeeldingUrl"/>
        <h2>detail.title</h2>
        <p>detail.tags</p>
        <img>detail.rating</img>
      <p>
        detail.description
      </p>
      <div>
        <img>detail.cast</img>
      </div>
    </div>}
      

    </BaseLayout>
  );
};

export default DetailPage;