import React from 'react';
import Player from "./components/content/watch/player/playerWindow/Player";

let EpisodesArray1 = [
    {url: "https://youtu.be/rkWvNUO7qk8", controls: '1'},
    {url: "https://youtu.be/VCmYfJQ0j4Y", controls: '1'},
    {url: "https://youtu.be/ivkJIm79x18", controls: '1'},
    {url: "https://youtu.be/ZwpiXyFCKw8", controls: '1'},
    {url: "https://youtu.be/NCozjvVsr7w", controls: '1'},
    {url: "https://youtu.be/2CXCyEuTtvs", controls: '1'},
    {url: "https://youtu.be/8CCU1S1l2LI", controls: '1'},
    {url: "https://youtu.be/FF1EjNf6MyI", controls: '1'},
]

let EpisodesArray = EpisodesArray1.map(name => {return <Player url={name.url} controls={name.controls}/>});
export default EpisodesArray;