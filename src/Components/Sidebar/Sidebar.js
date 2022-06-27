import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
//import { loginSelector } from "../../features/login";


function Sidebar() {
const display = useSelector(state=> state.sidebar.value.active);


  return (
    <div className={display?"sidebar":"sidebar-inactive"}>
      <ul className={display?"":"sidebar-inactive"}>
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
