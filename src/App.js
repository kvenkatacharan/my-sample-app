import { useState } from "react";
import "./App.css";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Pagination from "./Components/Pagination/Pagination";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      {!login ? (
        <Login onClick={setLogin}/>
      ) : (
        <div>
          <Sidebar />
          <Header />
          <Body />
        </div>
      )}
    </div>
  );
}

export default App;
