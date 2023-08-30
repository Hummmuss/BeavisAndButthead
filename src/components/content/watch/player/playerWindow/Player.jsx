import React from 'react';
import {NavLink} from 'react-router-dom';
import EpisodesArray from '../../../../../EpisodesArray';
import ArrowLeft from '../../../../../imgs/ArrowLeft.svg';
import ArrowRight from '../../../../../imgs/ArrowRight.svg'
import ReactPlayer from "react-player"
import style from "./Player.module.css"
import Items from "../items/Items"

const Player = ({url, controls}) => {
    const currentEpisodeIndex = EpisodesArray.findIndex((episode) => {
        const { props: { url: episodeUrl }, } = episode;
        return episodeUrl === url;
    });
    const prevEpisode = currentEpisodeIndex > 0 ? `/content/episode${currentEpisodeIndex}` : null;
    const nextEpisode = currentEpisodeIndex < EpisodesArray.length - 1 ? `/content/episode${currentEpisodeIndex + 2}` : null;

    return (
        <div className={style.content}>
            <div className={style.player}>
                <ReactPlayer url={url} width="100%" height="620px" controls/>
            </div>
            <div className={style.arrows}>
                {prevEpisode && (
                    <NavLink to={prevEpisode} className={style.arrow}>
                        <img src={ArrowLeft}/>
                    </NavLink>
                )}
                {nextEpisode && (
                    <NavLink to={nextEpisode} className={style.arrow}>
                        <img src={ArrowRight}/>
                    </NavLink>
                )}
            </div>
            <Items/>
        </div>
    );
};

export default Player;