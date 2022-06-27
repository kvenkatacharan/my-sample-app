import axios from "axios";
import { useEffect, useState } from "react";
function useInfiniteLoading(pageNumber) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const getData = (url) => {
    axios
      .get(url)
      .then((res) => 
          {setData((prevData) => [...new Set([...res.data])]);})
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setLoading(true);
    setError(false);
    var data = getData("https://jsonplaceholder.typicode.com/posts");
    setLoading(false);
  }, [pageNumber]);
  return { loading, error, data, hasMore };
}

export default useInfiniteLoading;
