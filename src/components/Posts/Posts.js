import {useState, useEffect} from "react"
import axios from "axios"
import PostsItem from "../PostsItem/PostsItem"
import "./Posts.css"

const Posts = () => {
    const [postsList, setpostsList] = useState([])
    const url = "https://jsonplaceholder.typicode.com/posts"

    const fetchData = async () => {
        axios.get(url).then(response => setpostsList(response.data))
        }

    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <div className='body-format'>
            <div className="header">
            <h1 className="heading">Posts</h1>
            <button className="button" >Add Post</button></div>
            <div className="inner-box">
                {
                postsList.map(postsObject => <PostsItem postsObject = {postsObject} />)
                }
            </div>
        </div>
      );

}

export default Posts;