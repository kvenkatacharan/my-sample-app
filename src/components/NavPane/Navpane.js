import React from "react"
import { Link } from "react-router-dom"
import "./NavPane.css"

const NavPane = () => {
    return(
        <div className="navpane">
            <ul className="list">
                <Link to="/todos" className="nav-text" ><li>Todos</li></Link>
                <Link to="/posts" className="nav-text" ><li>Posts</li></Link>
            </ul>
        </div>
        )
}

export default NavPane