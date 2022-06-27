import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dash from "lodash";

const pageSize=10;
function Twitter() {
    const login = useSelector(state=> state.login.value.loggedIn);
    const [posts, setPosts] = useState([]);
    const [optPosts, setOP] = useState([]);
    const getPost=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            setPosts(res.data);
            setOP(dash(res.data).slice(0).take(pageSize).value());
        })
    }
    useEffect(()=>getPost(),[])
    return ( <div className = "body">{login ? <div >
        {
            optPosts.map(post=>{
               return <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            })
        }
    </div>:"not loggedin"}</div> );
}

export default Twitter;