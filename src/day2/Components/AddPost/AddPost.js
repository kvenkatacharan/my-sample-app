import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "../../../App.css";
function AddPost() {
    const fieldRef = useRef();
  const [post, setPost] = useState({ title: "", body: "", userId: 1 });
  useEffect(()=>{fieldRef.current.focus()},[])
  const addPost = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((res) => {
        window.alert("success");
      })
      .catch(() => {
        window.alert("success");
      });
  };
  return (
    <div className="addPost">
      <form onSubmit={(e) => addPost(e)}>
        <input type="text" ref={fieldRef} placeholder="title" onChange={(e)=>setPost({...post, title:e.target.value})}></input>
        <input
          className="addPostArea"
          type="textarea"
          placeholder="What is happening...?"
          onChange={(e)=>setPost({...post, body:e.target.value})}
        ></input>
        <button className="addPostBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPost;
