import "./App.css";
import DayTwo from "./day2/index";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };
  return (
    <div className="App">
      <div className="sidebar">
        <div className="nav">
          <ul className="navItems">
          <li className="navItem">
            <input className="navItemSearch" type="search"></input>
            </li>
            <li className="navItem">
              <Link style={linkStyle} to="/dayOne">
                Day 1
              </Link>
            </li>
            <li className="navItem">
              <Link style={linkStyle} to="/dayTwo">
                Day 2
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="body">
        <Routes>
          <Route path="/dayOne" element={<div>to add</div>} />
          <Route path="/dayTwo" element={<DayTwo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
