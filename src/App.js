import React, {useState} from 'react'
import './App.css'
import Header from "./components/header/Header";
import Nav from "./components/navigation bar/Nav";
import Content from "./components/content/Content";
function App() {
  return(
    <div className = 'app-wrapper'>
      <Header/>
      <Nav/>
      <Content/>
    </div>
  );
}

export default App;
