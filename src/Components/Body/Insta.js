import axios from "axios";
import { useEffect, useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import useInfiniteLoading from "./useInfiniteLoading";
import dash from "lodash";

const pageSize = 5;
function Insta() {
  const login = useSelector((state) => state.login.value.loggedIn);
  const observer = useRef();
  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState([]);
  //const { data, error, loading, hasMore } = useInfiniteLoading(pageNumber);
  const [optData, setOD] = useState([]);
  const updateData=(pageNumber)=>{
      console.log("updateData");
      var startIndex = (pageNumber-1)*pageSize;
      const latest = dash(posts).slice(startIndex).take(pageSize).value();
      setOD(od=>[...od,...latest]);
      
  }
  const lastPostElem = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        entries[0].isIntersecting && setPageNumber((prevPageNum) => {console.log("pageNumber", pageNumber); return prevPageNum + 1});
      });
      if (node) observer.current.observe(node);
    },
    []
  );

  // const [posts, setPosts] = useState([]);
  // const [optPosts, setOP] = useState([]);

  const getPost=()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
          setPosts(res.data);
          setOD(dash(res.data).slice(0).take(pageSize).value());
      })
  }
  useEffect(()=>getPost(),[])
  useEffect(() => {
      console.log(pageNumber);
    updateData(pageNumber);
  }, [pageNumber]);
  return (
    <div className="body">
      {login ? (
        <div>
          {optData.map((post, index) => {
            return optData.length === index + 1 ? (
              <div ref={lastPostElem} key={post.title} className={"insta card"}>
                <p className="insta card-title">
                  <span className="insta card-img">image</span>
                  {post.title}
                </p>
                <p className="insta card-body">{post.body}</p>
              </div>
            ) : (
              <div ref={lastPostElem} key={post.id} className={"insta card"}>
                <p className="insta card-title">
                  <span className="insta card-img">image</span>
                  {post.title}
                </p>
                <p className="insta card-body">{post.body}</p>
              </div>
            );
          })}
        </div>
      ) : (
        "not loggedin"
      )}
    </div>
  );
}

export default Insta;
