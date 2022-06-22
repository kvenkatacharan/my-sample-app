import axios from "axios"
import { useState } from "react";
import { useParams } from "react-router-dom"

const PostDetails = () => {
    const {id} = useParams();
    const url = "https://jsonplaceholder.typicode.com/posts/" + id
    const [post, setPost] = useState({})
    axios.get(url).then(response=>setPost(response.data))

    return (<div>
        <ul>
            <li>{post.id}</li>
            <li>{post.title}</li>
            <li>{post.body}</li>
        </ul>
    </div>)
}

export default PostDetails