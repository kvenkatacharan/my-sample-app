import React from "react"
import { Link } from "react-router-dom"
import styles from "./NavPane.module.css"

const NavPane = () => {
    return(
        <div className={styles.navpane}>
            <ul className={styles.list}>
                <Link to="/todos" className={styles.navText} ><li>Todos</li></Link>
                <Link to="/posts" className={styles.navText} ><li>Posts</li></Link>
                <Link to="/poststable" className={styles.navText} ><li>Posts Table</li></Link>
                <Link to="/imageslider" className={styles.navText} ><li>Image Slider</li></Link>
            </ul>
        </div>
        )
}

export default NavPane