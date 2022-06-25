import axios from "axios";
import { useEffect, useState } from "react";
import AddPost from "./Components/AddPost/AddPost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
function Home() {
  //listmode true or false
  const [lm, setLM] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log("getting posts", res);
      setPosts(res.data);
    });
  };
  return <div>{lm ? <DisplayPosts posts={posts} /> : <AddPost />}</div>;
}

export default Home;
