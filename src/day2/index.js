import axios from "axios";
import { useEffect, useState } from "react";
import AddPost from "./Components/AddPost/AddPost";
import ViewPost from "./Components/ViewPost/ViewPost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
function Home() {
  //viewPost true or false
  const [vp, setVP] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postId, setPID]=useState();

  const viewPost=(pid)=>{
    setVP(true);
    setPID(pid);
  }

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  };
  return <div>{vp ? <ViewPost postId={postId} back={()=>setVP(false)} />:<DisplayPosts posts={posts} setPostId={(pid)=>viewPost(pid)} />}</div>;
}

export default Home;
