import React from 'react';
import style from './Content.module.css'
import AllEpisodeItems from './items/AllEpisodesTable/AllEpisodeItems'


const Content = () => {
    return (
        <div className={style.content}>
            <AllEpisodeItems/>
        </div>
    );
};

export default Content;