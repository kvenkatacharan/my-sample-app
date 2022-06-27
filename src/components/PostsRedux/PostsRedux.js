import { useEffect} from "react"
import axios from "axios"
import PostsItem from "../PostsItem/PostsItem"
import styles from "../Posts/Posts.module.css"
import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../Store/PostSlice";

const PostsRedux = () => {
    const dispatch = useDispatch();

    const url = "https://jsonplaceholder.typicode.com/posts"

    const fetchData = async () => {
        axios.get(url).then(response => dispatch(PostActions.setPostList(response.data)))
        }

    useEffect(()=>{
        fetchData();
    }, [])

    const postsList = useSelector(state => state.posts.postsList)

    return (
        <div className={styles.bodyFormat}>
            <div className={styles.header}>
            <h1 className={styles.heading}>Posts</h1>
            <button className={styles.button} onClick={event => window.location.href = "/addpost"} >Add Post</button></div>
            {<div className={styles.innerBox}>
                {
                postsList.map(postsObject => <PostsItem postsObject = {postsObject} />)
                }
                <div>
            </div>
            </div> }
            <div className={styles.redux}>
            <button className={styles.load} onClick={event => window.location.href = "/posts"} >Posts</button></div>           
            
        </div>
      );

}

export default PostsRedux;