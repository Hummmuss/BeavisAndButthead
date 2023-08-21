import React from 'react';
import style from './Content.module.css'
import Items from './items/Items'
const Content = () => {
    return (
        <div className = {style.content}>
                <div className = {style.pic}></div>
                <Items/>
        </div>
    );
};

export default Content;