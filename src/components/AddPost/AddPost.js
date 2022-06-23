import { useState } from "react"
import axios from "axios"
import styles from "./AddPost.module.css"

const AddPost = () => {
    const [post, setPost] = useState({
        id:"",
        title:"",
        body:"",
    })

    const {id, title, body} = post
    const handleChange =(e) => {
        setPost({...post, [e.target.name]:e.target.value})
    }
    const addPost = (e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts", post).then(response => alert("post added")).catch(error => console.log(error))
    }
return (
    <div className={styles.bodyFormat}>
        <div className={styles.innerBox}>
        <h1>AddPost</h1>
        <div className={styles.format}>
            <form>
            <label htmlFor="id" className={styles.label}>ID</label>
            <input type="text" name="id" className={styles.textBox} value = {id} onChange={handleChange}/><br />
            <label htmlFor="title" className={styles.label}>Title</label>
            <input type="text" name="title" className={styles.textBox} value={title} onChange={handleChange}/><br />
            <label htmlFor="body" className={styles.label} >Body</label>
            <input type="text" name="body" className={styles.textBox} value={body} onChange={handleChange} /><br />
            <button className={styles.button} onClick={addPost}>Add Post</button>
            </form>
        </div>
        </div>
    </div>
);
}

export default AddPost;