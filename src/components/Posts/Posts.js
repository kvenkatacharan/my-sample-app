import {useState, useEffect} from "react"
import axios from "axios"
import PostsItem from "../PostsItem/PostsItem"
import styles from "./Posts.module.css"

const Posts = () => {
    const [postsList, setpostsList] = useState([])
    const [limit, setLimit] = useState (5)
    const url = "https://jsonplaceholder.typicode.com/posts"

    const fetchData = async () => {
        axios.get(url, /*{
            params: { _limit:limit }
        }*/).then(response => setpostsList(response.data))
        }

    useEffect(()=>{
        fetchData();
    }, /*[limit]*/ [])

    const loadPosts = () => {
        setLimit(limit+5)
    }

    return (
        <div className={styles.bodyFormat}>
            <div className={styles.header}>
            <h1 className={styles.heading}>Posts</h1>
            <button className={styles.button} onClick={event => window.location.href = "/addpost"} >Add Post</button></div>
            {/*<div className={styles.innerBox}>
                {
                postsList.map(postsObject => <PostsItem postsObject = {postsObject} />)
                }
                <div>
                {
                    postsList.length >= limit && <button className = {styles.load} onClick={loadPosts}>Load more</button>
                }
            </div>
            </div> */}
            <div className={styles.innerBox}>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {postsList.slice(0,limit).map((posts, index) =>
                    <tr key={index}>
                        <td>{posts.id}</td>
                        <td>{posts.title}</td>
                        <td>{posts.body}</td>
                    </tr> )
}
                </tbody>
            </table>
            <div>
                {
                    postsList.length >= limit && <button className = {styles.load} onClick={loadPosts}>Load more</button>
                }
            </div>
            </div>
            
        </div>
      );

}

export default Posts;