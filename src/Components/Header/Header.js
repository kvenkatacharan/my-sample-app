import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/login";
import {activate, deactivate} from "../../features/sidebar";


function Header() {
    const sbb = useSelector(state => state.sidebar.value.active)
    const dispatch = useDispatch();
    return ( <div className="header">
        {sbb? (
        <button onClick={() => dispatch(deactivate())}>hide</button>
      ) : (
        <button onClick={() => dispatch(activate())}>show</button>
      )}

        <div className="headerLogo">image</div>
        <div className="headerSearch"><input type="search"></input>
        <button>search</button>
        </div>
        <div className="headerEnd"><button onClick={()=>dispatch(logout())}>Logout</button></div>
    </div> );
}

export default Header;