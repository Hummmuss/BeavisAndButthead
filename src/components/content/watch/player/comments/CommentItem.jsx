import React from 'react';
import style from "./CommentItem.module.css"

const CommentItem = (props) => {
    return (
        <div className={style.item}>
            <img src={props.img}/>
            <div>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.text}</div>
            </div>
        </div>
    );
};

export default CommentItem;