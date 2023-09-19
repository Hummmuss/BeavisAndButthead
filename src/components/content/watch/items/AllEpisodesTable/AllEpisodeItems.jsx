import React from "react";
import EpisodeItem from './EpisodeItem'
import style from './AllEpisodeItems.module.css'


const AllEpisodeItems = (props) => {
    return (
        <div className={style.container}>
            {
                props.EpisodesArray.map((episode) => (
                    <EpisodeItem link={episode.link} img={episode.img} number={episode.number}/>
                ))
            }
        </div>
    )
}

export default AllEpisodeItems;