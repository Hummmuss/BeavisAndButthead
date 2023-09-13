import React from 'react';
import CommentItem from "../../comments/commentItem/CommentItem";
import CommentsArray from "../../../../../../DATA/CommentsArray";
import EpisodesArray from "../../../../../../DATA/EpisodesArray";
import style from "./FilteredComments.module.css"
import Beavis from "../../../../../../DATA/imgs/SadBeavis.png";

const FilteredComments = ({url}) => {
    const currentEpisodeIndex = EpisodesArray.findIndex(episode => episode.url === url);
    const filteredComments = CommentsArray.filter((comment) => comment.episodeID === currentEpisodeIndex);
    return (
        <div>
            {filteredComments.length===0 ? <div className={style.nocomments}> There are no comments yet... <img src = {Beavis}/> </div> :
                filteredComments.map((comment) => (
                    <CommentItem img={comment.img} name={comment.name} text={comment.text}/>
                ))}
        </div>
    );
};

export default FilteredComments;