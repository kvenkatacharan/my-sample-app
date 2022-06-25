import axios from "axios";
import { useEffect, useState } from "react";
import AddPost from "./Components/AddPost/AddPost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
function Home() {
  //listmode true or false
  const [lm, setLM] = useState(true);
  const [posts,setPosts]=useState([])

  useEffect(()=>{getPosts();},[])
  const getPosts=()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{console.log("getting posts", res);setPosts(res.data)});
  }
const Header = ()=>{
    return(
        <div className="Header">
        {lm ? (
          <button onClick={() => setLM(false)}>Add Post</button>
        ) : (
          <button onClick={() => setLM(true)}>View Posts</button>
        )}
      </div>
    )
}
return (
      <div >
    <Header />
    <br/>
    {(lm) ?<DisplayPosts posts={posts}/>:<AddPost />}
    </div>
  );
}

export default Home;
