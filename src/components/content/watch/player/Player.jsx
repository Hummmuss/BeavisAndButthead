import React from 'react';
import ScrollItems from "./scrollItems/ScrollItems"
import AddComment from "./comments/addComment/AddComment";
import FilteredComments from "./comments/filteredComments/FilteredComments";
import PlayerWindow from "./playerWindow/PlayerWindow";
import style from './Player.module.css'


const Player = ({url, CommentsArray, EpisodesArray}) => {

    return (
        <div className={style.content}>
            <PlayerWindow url={url}/>
            <ScrollItems/>
            <AddComment/>
            <FilteredComments url = {url} CommentsArray = {CommentsArray} EpisodesArray = {EpisodesArray}/>
        </div>
    );
};

export default Player;
