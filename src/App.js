import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import NavPane from "./components/NavPane/Navpane";
import Todos from "./components/Todos/Todos";
import Posts from "./components/Posts/Posts"
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
      <NavPane />
      <Routes>
        <Route path = "/todos" element = {<Todos />} />
        <Route path = "/posts" element = {<Posts />} />
        <Route path="*" element = {<ErrorPage />} />
      </Routes>
      </div>
    </BrowserRouter>
 ) 
}

export default App;
