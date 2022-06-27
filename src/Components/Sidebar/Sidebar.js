import { useState } from "react";
import { Link} from "react-router-dom";


function Sidebar() {
  const [showSB, setSSB] = useState("visible");

  return (
    <div className="sidebar">
      {showSB === "visible" ? (
        <button onClick={() => setSSB("hidden")}>hide</button>
      ) : (
        <button onClick={() => setSSB("visible")}>show</button>
      )}
      <ul style={{ visibility: showSB }}>
        <li>
          <Link to="/todos">todos</Link>
        </li>
        <li>
          <Link to="/insta">instagram</Link>
        </li>
        <li>
          <Link to="/twitter">twitter</Link>
        </li>
      </ul>
      
    </div>
  );
}

export default Sidebar;
