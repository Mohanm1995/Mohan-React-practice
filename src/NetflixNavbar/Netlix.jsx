import React from "react";
import STYLE from './Netflix.module.css'
import Menunet from './Menu';
import LogoNet from './Logo';
import SearchNet from './Search';

const NetNavbar =()=>{
    return(
        <div id={STYLE.NavBlock}>
        <LogoNet/>
        <Menunet/>
        <SearchNet/>
        </div>       
    )
}
export default NetNavbar