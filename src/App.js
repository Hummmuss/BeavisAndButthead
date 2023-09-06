import React from 'react'
import './App.css'
import Header from "./components/header/Header";
import Nav from "./components/navigation bar/Nav";
import Content from "./components/content/watch/Content";
import About from "./components/content/about/About";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Quotes from "./components/content/quotes/Quotes";
import AllEpisodesPlayer from "./components/content/watch/player/EpisodesToPlayer";

function App() {
    return (
        <div className='app-wrapper'>
            <Router>
            <Header/>
            <Nav/>
                <Routes>
                    <Route path="/" element={<About/>}/>
                    <Route path="/content" element={<Content/>}/>
                    <Route path="/content/episode1" element={AllEpisodesPlayer[0]}/>
                    <Route path="/content/episode2" element={AllEpisodesPlayer[1]}/>
                    <Route path="/content/episode3" element={AllEpisodesPlayer[2]}/>
                    <Route path="/content/episode4" element={AllEpisodesPlayer[3]}/>
                    <Route path="/content/episode5" element={AllEpisodesPlayer[4]}/>
                    <Route path="/content/episode6" element={AllEpisodesPlayer[5]}/>
                    <Route path="/content/episode7" element={AllEpisodesPlayer[6]}/>
                    <Route path="/content/episode8" element={AllEpisodesPlayer[7]}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/quotes" element={<Quotes/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
