import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return <div className="App">
    <nav>
    <Link to="/dayOne">Day 1</Link> |{" "}
    <Link to="/dayTwo">Day 2</Link>
    </nav>
  </div>;
}

export default App;
