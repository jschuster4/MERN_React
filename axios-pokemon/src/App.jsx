import { useState } from 'react';
import './App.css';
import PokemonApi from './components/PokemonApi';

function App() {
  // const[allPokemon, setAllPokemon] = useState([])
  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <div>
        <PokemonApi/>
      </div>
    </div>
  );
}

export default App;
