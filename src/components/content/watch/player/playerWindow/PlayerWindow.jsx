import React from 'react';
import EpisodesArray from "../../../../../DATA/EpisodesArray";
import style from "./PlayerWindow.module.css";
import ArrowL from "../../../../../DATA/imgs/ArrowL";
import ArrowR from "../../../../../DATA/imgs/ArrowR";
import ReactPlayer from "react-player";
import {NavLink} from "react-router-dom";

const PlayerWindow = ({url, controls}) => {

    const currentEpisodeIndex = EpisodesArray.findIndex(episode => episode.url === url);
    const prevEpisode = currentEpisodeIndex > 0 ? `/content/episode${currentEpisodeIndex}` : null;
    const nextEpisode = currentEpisodeIndex < EpisodesArray.length - 1 ? `/content/episode${currentEpisodeIndex + 2}` : null;

    return (
        <div>
            <div className={style.player}>
                <ReactPlayer url={url} width="100%" height="620px" controls/>
            </div>
            <div className={style.arrows}>
                {prevEpisode && (
                    <NavLink to={prevEpisode} className={style.arrow}>
                        <ArrowL/>
                    </NavLink>
                )}

                <div className={style.header}>Episode {currentEpisodeIndex+1}</div>
                {nextEpisode && (
                    <NavLink to={nextEpisode} className={style.arrow}>
                        <ArrowR/>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default PlayerWindow;