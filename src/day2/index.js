import axios from "axios";
import { useEffect, useState } from "react";
import ViewPost from "./Components/ViewPost/ViewPost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
function Home() {
  //viewPost true or false
  const [vp, setVP] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postsFull, setPF] = useState();
  const [postId, setPID]=useState();
  const [ctr, addCtr] = useState(5);
  
  const loadMore = () => {
    var remainingTransactions = postsFull.length - ctr;
    if (remainingTransactions >= 5) {
      addCtr(ctr + 5);
      setPosts(postsFull.slice(0, (ctr+5)));
    } else if (remainingTransactions > 0 && remainingTransactions < 5) {
      addCtr(ctr + remainingTransactions);
      setPosts(postsFull);
    }
  };

  const viewPost=(pid)=>{
    setVP(true);
    setPID(pid);
  }

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {

      setPosts(res.data.slice(0,ctr));
      setPF(res.data);
    });
  };
  return <div>{vp ? <ViewPost postId={postId} back={()=>setVP(false)} />:<DisplayPosts posts={posts} setPostId={(pid)=>viewPost(pid)} loadMore = {()=>loadMore()} />}</div>;
}

export default Home;
