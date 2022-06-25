import axios from "axios";
import { useState } from "react";
import "../../../App.css";
function AddPost() {
  const [post, setPost] = useState({ title: "", body: "", userId: 1 });
  const addPost = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then(() => {
        window.alert("success");
      })
      .catch(() => {
        window.alert("success");
      });
  };
  return (
    <div className="addPost">
      <form onSubmit={(e) => addPost(e)}>
        <input type="text" placeholder="title"></input>
        <input
          className="addPostArea"
          type="textarea"
          placeholder="What is happening...?"
        ></input>
        <button className="addPostBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPost;
