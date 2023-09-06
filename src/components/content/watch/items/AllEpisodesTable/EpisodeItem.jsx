import style from './EpisodeItem.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const EpisodeItem = (props) => {
    return (
        <NavLink to={props.link}>
            <div className={style.item}>
                <img
                    src={props.img}/>
                <div className={style.name}>episode {props.number}</div>
            </div>
        </NavLink>
    )
}

export default EpisodeItem;