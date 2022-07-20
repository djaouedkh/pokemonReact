import React, { useState, useEffect} from "react";
import Pokemon from "../models/pokemon";
// import POKEMONS from "../models/mock-pokemon";

// hook personnalisé, ce hook peut etre utilisé sur tous les composants qui utilise une liste de pokemon
const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        // setPokemons(POKEMONS);
        // on remplace la ligne au dessus par un appel à une API
        fetch('http://localhost:3001/pokemons')
        .then(res => res.json())
        .then((pokemons) => {
            setPokemons(pokemons)
        })
    }, []);

    return pokemons;
}

export default usePokemons;