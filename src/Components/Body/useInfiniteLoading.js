import axios from "axios";
import { useEffect, useState } from "react";
function useInfiniteLoading(pageNumber) {
    const[data, setData]= useState([]);
  const getData = (url) => {
    var data =[];
    axios
      .get(url)
      .then((res) => (data = res.data))
      .catch((err) => console.log(err));
      return data;
  };
  useEffect(() => {
      var data = getData("https://jsonplaceholder.typicode.com/posts");
      setData(data);
      
    }, [pageNumber]);
  return null;
}

export default useInfiniteLoading;
