import style from './NavItem.module.css'
import React from "react";

const NavItem = (props) => {
    return (
            <div className={style.item}>{props.text}</div>
    )
}

export default NavItem;