import style from './Item.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const Item = (props) => {
    return (
        <NavLink to={props.link}>
            <div className={style.item}>
                <img
                    src={props.img}/>
                episode {props.number}
            </div>
        </NavLink>
    )
}

export default Item;