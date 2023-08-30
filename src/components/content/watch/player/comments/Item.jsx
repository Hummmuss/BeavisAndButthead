import React from 'react';
import style from "./Item.module.css"
import CommentsArray from "../../../../../DATA/CommentsArray";

const Item = (props) => {
    return (
        <div className={style.item}>
            <img src={CommentsArray[props.index].img}/>
            <div>
                <div className={style.name}>{CommentsArray[props.index].name}</div>
                <div className={style.text}>{CommentsArray[props.index].text}</div>
            </div>
        </div>
    );
};

export default Item;