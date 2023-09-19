import React from 'react';
import style from './Content.module.css'
import AllEpisodeItems from './items/AllEpisodesTable/AllEpisodeItems'


const Content = (props) => {
    return (
        <div className={style.content}>
            <AllEpisodeItems EpisodesArray = {props.EpisodesArray}/>
        </div>
    );
};

export default Content;