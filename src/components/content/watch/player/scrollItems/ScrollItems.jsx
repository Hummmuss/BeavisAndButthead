import React from "react";
import EpisodeItem from '../../items/AllEpisodesTable/EpisodeItem'
import style from './ScrollItems.module.css'
import EpisodesArray from "../../../../../DATA/EpisodesArray";

const ScrollItems = () => {
    return (
        <div className={style.container}>
            <div className={style.container}>
                {
                    EpisodesArray.map((episode) => (
                        <EpisodeItem link={episode.link} img={episode.img} number={episode.number}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ScrollItems;