import React from 'react';
import style from './Nav.module.css'
import navPic from "../../imgs/bg.svg"
import TextBlock from "./TextBlock";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <img src={navPic} style = {{width: 300}}/>
            <TextBlock/>
        </nav>
    );


};

export default Nav;