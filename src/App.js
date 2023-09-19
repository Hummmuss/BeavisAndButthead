import React, {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/header/Header";
import Nav from "./components/navigation bar/Nav";
import Content from "./components/content/watch/Content";
import About from "./components/content/about/About";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Quotes from "./components/content/quotes/Quotes";
import EpisodesArray from "../src/DATA/EpisodesArray";
import QuotesArray from "../src/DATA/QuotesArray";
import Player from "./components/content/watch/player/Player";
import CommentsArray from "./DATA/CommentsArray";
import Loader from "react-js-loader";

function App() {

    let AllEpisodesPlayer = EpisodesArray.map(name => {return <Player url={name.url} CommentsArray = {CommentsArray} EpisodesArray = {EpisodesArray}/>});

    const episodeRoutes = AllEpisodesPlayer.map((episode, index) => (
        <Route key={`episode${index + 1}`} path={`/content/episode${index + 1}`} element={episode} />
    ));

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Загрузка данных
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className='app-wrapper'>
            {isLoading ? (
                <div className='loading'><Loader type="bubble-top" bgColor={'#FF8C00'}/></div>
            ) : (
            <Router>
            <Header/>
            <Nav/>
                <Routes>
                    <Route path="/" element={<About/>}/>
                    <Route path="/content" element={<Content EpisodesArray = {EpisodesArray}/>}/>
                    {episodeRoutes}
                    <Route path="/about" element={<About/>}/>
                    <Route path="/quotes" element={<Quotes QuotesArray = {QuotesArray}/>}/>
                </Routes>
            </Router>
            )}
        </div>
    );
}

export default App;
