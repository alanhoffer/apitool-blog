import React from 'react';
import ReactDOM from "react-dom/client";
import {
  Route,
  Routes,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomeView from './views/HomeView';
import NewsView from './views/NewsView';



function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomeView /> } />
        <Route path="news" element={ <NewsView/> } />
      </Routes>
    </div>
  );
}

export default App;
