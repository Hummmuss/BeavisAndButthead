import style from './Item.module.css'
import React from "react";

const Item = (props) => {
    return (
    <div>
        <div className ={style.item}>
            <img src={"https://m.media-amazon.com/images/M/MV5BMjdkMDNkYjMtNTU0YS00YzVjLTk1NmItYWVjOWNmMWFhMTRlXkEyXkFqcGdeQXVyMzM4NjcxOTc@._V1_.jpg"}/>
            serie {props.number}
        </div>
    </div>
    )
}

export default Item;