import React , {useEffect , useState}from 'react'
import yelp from '../api/yelp'


export default () => {
    const [results, setResults] = useState([]);
  const [errorMessage, setErrorMeasage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log('hi there')
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMeasage("somthing went wrong");
    }
  };

useEffect(()=>{
  searchApi('Pizza')
},[])
return [searchApi , results , errorMessage]
}
