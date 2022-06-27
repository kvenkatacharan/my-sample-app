import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body/Body";
import Insta from "./Components/Body/Insta";
import Todos from "./Components/Body/Todos";
import Twitter from "./Components/Body/Twitter";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      {!login ? (
        <Login onClick={setLogin}/>
      ) : (
        <div>
          <Sidebar />
          <Header />
        </div>
      )}
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/insta" element={<Insta />} />
        <Route path="/twitter" element={<Twitter />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
