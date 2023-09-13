import React from 'react';
import style from "./AddComment.module.css"
const AddComment = () => {
    return (
        <div className={style.wrap}>
            <div className={style.header}>Add comment</div>
            <input placeholder=" What's your name?" className={style.author}/>
            <textarea placeholder=" Type something..." tabIndex={4} rows={6} className={style.input}/>
            <button className={style.button}>Send</button>
        </div>
    );
};

export default AddComment;