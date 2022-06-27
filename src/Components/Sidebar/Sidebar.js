import { useState } from "react";

function Sidebar() {
    const [showSB, setSSB] = useState("visible");

    return ( <div className="sidebar"> 
    {showSB==="visible" ? <button onClick={()=>setSSB("hidden")}>hide</button>:<button onClick={()=>setSSB("visible")}>show</button>}
    <ul style={{visibility:showSB}}>
        <li>todos</li>
        <li>instagram</li>
        <li>twitter</li>
    </ul>
    </div> );
}

export default Sidebar;