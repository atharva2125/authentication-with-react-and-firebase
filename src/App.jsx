 
 import { useEffect, useState } from "react";
import { Auth } from "./component/auth";
import { db } from "./config/firebase";
import { getDocs,collection } from 'firebase/firestore'

function App() {
  const [movieList, setMovieList] = useState([])

  const moviesCollectionRef = collection(db, "movies")

  useEffect(() => {
    const getMovieList = async () => {
        //READ THE DATA
        //SET THE MOVIELIST
        try {
          const data = await getDocs(moviesCollectionRef);
          const filteredData = data.docs.map((doc) => ({...doc.data()}));
          console.log(filteredData);
        } catch (err) {
          console.error(err);
        }
    }
    getMovieList();
  }, [])
 
   
  return (
 
      <div className='App'>
         
        <Auth/>
        
      </div>
 
  )
}

export default App;
