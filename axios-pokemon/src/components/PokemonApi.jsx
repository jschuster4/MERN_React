import React, { useState, useEffect } from  'react';
import axios from 'axios';

const PokemonApi = props => {
    const[pokemons, setPokemons] = useState(null);
    const[apiPokemons, setApiPokemons] = useState(null);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response=>
        setPokemons(response.data.results))
    }, [])
    
    const handlePokemon = (e) => { 
        setApiPokemons(pokemons);
    }

    return(
        
        <div>
            <button onClick={handlePokemon}>Fetch Pokemon</button>
            {   
                apiPokemons ? apiPokemons.map((pokemon, i) => {
                    return <p key={i}>
                        {pokemon.name}
                    </p>
                }) : ""
            }
        </div>
    );
}

export default PokemonApi