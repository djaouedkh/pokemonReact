import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import usePokemon from '../hooks/pokemon.hook';
import PokemonService from '../services/pokemon-service';
import { Link } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
  
// HOOKS
// permet de gerer la valeur d'une variable dynamiquement et de gerer son cycle de vie
// Condition d'utilisation: ne pas appeler un hooks dans une boucle ou if, doit se placer à la racine dans un composant de fonction ou dans un hooks personnalisé, quand on utilise set.. la nouvelle valeur écrase l'ancienne ( si on veut ajouter alors il faut créer une nvlle donnée contenant l'ancienne + la new)
// Cycle de vie d'un composant via ls hooks: 
//  - componentDidMount(): "Montage" methode appelée lors de la création du composant (lors de son insertion dans le DOM), permet de mettre en place des instruction lors de l'initialisation du composant, comme la recuperation de données depuis un serveur par exemple.
//  - componentDidUpdate(prevProps, prevState): Quand react detect que les valeurs d'une propriété du composant sont modifiées, le composant est mis à jour. 2param(1, 2) 1: propriétés / 2: l'état avant la mise à jour
//  - componentWillUnmount(): "Démontage": méthode appelée juste avant la destruction du composant suite à la navigation de l'utilisateur par exemple

const PokemonList: FunctionComponent = () => {

    // const pokemons = usePokemon(); // on utilise le hook personalisé pour gerer l'etat initiale et son update, cela sert a factoriser un hook utiliser plusieur fois
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        // setPokemons(POKEMONS);
        // // on remplace la ligne au dessus par un appel à une API qui se trouve dans le fichier pokemon-service, qui possède des methode static donc apellable sans instancier d'objet
        PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
    }, []);
  
    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container"> 
                <div className="row"> 
                    <PokemonSearch/>
                    {pokemons.map(pokemon => (
                        // pokemon={pokemon} = permet de passet au composant PokemonCard l'objet pokemon, et ce dernier se chargera de traiter ses infos etc
                        <PokemonCard key={pokemon.id} pokemon={pokemon} /* background="antiquewhite"*//> // le omposant PokemonCard peut avoir une props background
                    ))}
                </div>
                <Link className='btn-floating btn-large waves-effect waves-light red z-depth-3' style={{position: 'fixed', bottom: '25px', right: '25px'}} to="/pokemon/add">
                    <i className='material-icons'>add</i>
                </Link>
            </div>
        </div> 
    );
}
  
export default PokemonList;