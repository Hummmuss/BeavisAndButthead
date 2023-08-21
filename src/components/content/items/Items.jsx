import React from "react";
import Item from './Item'
import style from './Items.module.css'

const Items = () => {
    return (
        <div className={style.container}>
            <Item number = "1"/>
            <Item number = "2"/>
            <Item number = "3"/>
            <Item number = "4"/>
            <Item number = "5"/>
            <Item number = "6"/>
            <Item number = "7"/>
            <Item number = "8"/>
        </div>
    )
}

export default Items;