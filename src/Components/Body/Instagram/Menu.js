import "./css/menu.css"
import {ReactComponent as Home} from "./images/home.svg";
import {ReactComponent as Message} from "./images/message.svg";
import {ReactComponent as Add} from "./images/add.svg";
import {ReactComponent as Explore} from "./images/explore.svg";
import {ReactComponent as Like} from "./images/like.svg";

function Menu() {
    return ( <div className="menu">
        <Home className="icon"/>
        <Message className="icon"/>
        <Add className="icon"/>
        <Explore className="icon"/>
        <Like className="icon"/>
    </div> );
}

export default Menu;