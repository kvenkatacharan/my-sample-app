
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Insta from "./Components/Body/Insta";
import Instagram from "./Components/Body/InstaTwo";
import Todos from "./Components/Body/Todos";
import Twitter from "./Components/Body/Twitter";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";


function App() {
  const login = useSelector(state=> state.login.value.loggedIn);
  return (
    <div className="App">
      <BrowserRouter>
      {!login ? (
        <Login onClick={()=>{}}/>
      ) : (
        <div>
          <Sidebar />
          {/*<Header logout={()=>{}}/>*/}
        </div>
      )}
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/insta" element={<Insta />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/instagram" element={<Instagram />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
