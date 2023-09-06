import React from 'react';
import style from './Nav.module.css'
import navPic from "../../DATA/imgs/bg.svg"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <img src={navPic} style={{width: 300}}/>
            <div className={style.textblock}>
                <div className={style.item} style={{textDecoration: 0}}>
                    <NavLink to="/about">about</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/content">watch</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/quotes">quotes</NavLink>
                </div>
            </div>
        </nav>
    );


};

export default Nav;