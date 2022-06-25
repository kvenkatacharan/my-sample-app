import axios from "axios";
import { useEffect, useState } from "react";

function ViewPost(props) {
    const {postId, back} = props;
    const [post,setPost] = useState();
    const getPost =(postId)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res)=>{
            setPost(res.data);
        })
    }
    useEffect(()=>{
        getPost(postId)
    },[postId]);
    return ( <div className="viewPost">

        {post  &&
        <div>
        <button onClick={()=>back()}>Back</button>
        <br/>
        <div>{post.title}</div>
        <br/>
        <div>{post.body}</div> 
        </div>}
    </div> );
}

export default ViewPost;