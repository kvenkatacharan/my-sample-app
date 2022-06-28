import {useState, useEffect} from "react"
import axios from "axios"
import PostsItem from "../PostsItem/PostsItem"
import styles from "./Posts.module.css"

const Posts = () => {
    const [postsList, setpostsList] = useState([])
    const [limit, setLimit] = useState (5)
    const url = "https://jsonplaceholder.typicode.com/posts"

    const fetchData = async () => {
        axios.get(url, {
            params: { _limit:limit }
        }).then(response => setpostsList(response.data))
        }

    useEffect(()=>{
        fetchData();
    }, [limit])

    const loadPosts = () => {
        setLimit(limit+5)
    }

    const handleScroll = (e) => {
        if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
            loadPosts()
          }
    }


    return (
        <div className={styles.bodyFormat}>
            <div className={styles.header}>
            <h1 className={styles.heading}>Posts</h1>
            <button className={styles.button} onClick={event => window.location.href = "/addpost"} >Add Post</button></div>
            {<div className={styles.innerBox} onScroll={handleScroll}>
                {
                postsList.map(postsObject => <PostsItem postsObject = {postsObject} />)
                }
                <div>
                {/*
                    postsList.length >= limit && <button className = {styles.load} onClick={loadPosts}>Load more</button>*/
                    
                }
                </div>
            </div> }
            <div className={styles.redux}>
            <button className={styles.load} onClick={event => window.location.href = "/postsredux"} >Posts Redux</button></div>           
            
        </div>
      );

}

export default Posts;