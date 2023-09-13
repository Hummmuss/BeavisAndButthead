import React from 'react';
import ScrollItems from "./scrollItems/ScrollItems"
import AddComment from "./comments/addComment/AddComment";
import FilteredComments from "./comments/filteredComments/FilteredComments";
import PlayerWindow from "./playerWindow/PlayerWindow";
import style from './Player.module.css'

const Player = ({url, controls}) => {

    return (
        <div className={style.content}>
            <PlayerWindow url={url} controls={controls}/>
            <ScrollItems/>
            <AddComment/>
            <FilteredComments url={url}/>
        </div>
    );
};

export default Player;
