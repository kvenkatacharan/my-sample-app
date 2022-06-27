import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { loginSelector } from "../../features/login";

function Sidebar() {
  const display = useSelector((state) => state.sidebar.value.active);
  const style = { color: "white", textDecoration: "none"};

  return (
    <div className={display ? "sidebar" : "sidebar-inactive"}>
      <ul style={display?{}:{display:"none"}}>
        <li>
          <Link style={style} to="/todos">
            todos
          </Link>
        </li>
        <li>
          <Link style={style} to="/insta">
            instagram
          </Link>
        </li>
        <li>
          <Link style={style} to="/twitter">
            twitter
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
