import { useState } from "react"
import axios from "axios"
import "./AddPost.css"

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
    <div className="body-format">
        <div className="inner-box-ap">
        <h1>AddPost</h1>
        <div className="format">
            <form>
            <label htmlFor="id" className="label">ID</label>
            <input type="text" name="id" className="text-box" value = {id} onChange={handleChange}/><br />
            <label htmlFor="title" className="label">Title</label>
            <input type="text" name="title" className="text-box" value={title} onChange={handleChange}/><br />
            <label htmlFor="body" className="label" >Body</label>
            <input type="text" name="body" className="text-box" value={body} onChange={handleChange} /><br />
            <button className="button1" onClick={addPost}>Add Post</button>
            </form>
        </div>
        </div>
    </div>
);
}

export default AddPost;