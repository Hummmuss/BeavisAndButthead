import Player from "./Player";
import EpisodesArray1 from "../../../../DATA/EpisodesArray";

let EpisodesToPlayer = EpisodesArray1.map(name => {return <Player url={name.url} controls={name.controls}/>});


export default EpisodesToPlayer;