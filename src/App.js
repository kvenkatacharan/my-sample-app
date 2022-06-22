import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import NavPane from "./components/NavPane/Navpane";
import Todos from "./components/Todos/Todos";
import Posts from "./components/Posts/Posts";
import AddPost from "./components/AddPost/AddPost";
import ErrorPage from "./ErrorPage";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
      <NavPane />
      <Routes>
        <Route path = "/todos" element = {<Todos />} />
        <Route path = "/posts" element = {<Posts />} />
        <Route path = "/addpost" element = {<AddPost />} />
        <Route path="/posts/:id" element = {<PostDetails />} />
        <Route path="*" element = {<ErrorPage />} />
      </Routes>
      </div>
    </BrowserRouter>
 ) 
}

export default App;
