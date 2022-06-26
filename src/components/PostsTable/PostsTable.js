import {useState, useEffect} from "react"
import axios from "axios"
import styles from "../Posts/Posts.module.css"
import Pagination from "../Pagination/Pagination"

const PostsTable = () => {
    const [postsList, setpostsList] = useState([])
    const [limit, setLimit] = useState (5)
    const [displayList, setDisplayList] = useState([])

    const url = "https://jsonplaceholder.typicode.com/posts"

    const fetchData = async () => {
        axios.get(url).then(response => setpostsList(response.data))
        }

    useEffect(()=>{
        fetchData();
        setDisplayList(postsList.slice(0,limit))
    }, [])

    const loadPosts = () => {
        setLimit(limit+5)
    }

    const pageHandler = (page) => {
        setDisplayList(postsList.slice((page-1)*limit, page*limit))
    }

    return (
        <div className={styles.bodyFormat}>
            <div className={styles.header}>
            <h1 className={styles.heading}>Posts</h1>
            <button className={styles.button} onClick={event => window.location.href = "/addpost"} >Add Post</button></div>
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
                    {displayList.map((posts, index) =>
                    <tr key={index}>
                        <td>{posts.id}</td>
                        <td>{posts.title}</td>
                        <td>{posts.body}</td>
                    </tr> )
}
                </tbody>
            </table>
            <div>
                {/*
                    postsList.length >= limit && <button className = {styles.load} onClick={loadPosts}>Load more</button>*/
                }
            </div>
            <Pagination dataLength = {postsList.length} limit = {limit} pageHandler={pageHandler}/>
            </div>
            
        </div>
      );

}

export default PostsTable;