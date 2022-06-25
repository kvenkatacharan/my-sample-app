import "./App.css";
import DayTwo from "./day2/index";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="nav">
          <ul className="navItems">
            <li className="navItem">
              <Link className="link" to="/dayOne">
                Day 1
              </Link>
            </li>
            <li className="navItem">
              <Link className="link" to="/dayTwo">
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
