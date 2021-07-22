import React, {useState} from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import Mynavbar from './components/Navbar/Mynavbar';
function App() {
  const [pokeResult, setPokeResult] = useState({});
  return (
    <Router>
      <Mynavbar setPokeResult={setPokeResult} />
      <Routes pokeResult={pokeResult} />
    </Router>
  );
}

export default App;
