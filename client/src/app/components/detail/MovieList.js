import { useState, useEffect } from 'react';

import { useFirestore } from "../../contexts/firebase/firestore.context";

const MovieList = ({ filter }) => {
    const [ movies, setMovies ] = useState();
    const { getMovieList } = useFirestore();

    useEffect(() => {
        const fetchData = async () => {
          const data = await getMovieList(filter);
          setMovies(data);
        }
    
        fetchData();    
      }
    );

    return (

    )
}