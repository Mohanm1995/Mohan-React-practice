import React from "react";
import STYLE from "./Menu.module.css"

const Menunet =()=>{
    return(
        <div id={STYLE.MenuBlock}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Series</a></li>
                <li><a href="">Film</a></li>
                <li><a href="">Latest</a></li>
                <li><a href="">My List</a></li>
            </ul>
        </div>
    )
}
export default Menunet