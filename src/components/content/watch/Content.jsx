import React from 'react';
import style from './Content.module.css'
import Items from './items/Items'
import {Outlet} from "react-router-dom";


const Content = () => {
    return (
        <div className={style.content}>
            <Items/>
        </div>
    );
};

export default Content;