import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonService from '../services/pokemon-service';

type Params = { id: string };

// Quand un composant a besoin de params alors il devra posseder RouteComponentProps<Params>
const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
    const [pokemon, setPokemon] = useState<Pokemon|null>(null);

    // on recu le bon pokemon de la liste grace à l'id
    useEffect(() => {
        PokemonService.getPokemon(+match.params.id).then(pokemon => setPokemon(pokemon));
    }, [match.params.id]);
    
    return (
        <div>
        { pokemon ? (
            <div className="row">
                <h2 className="header center">Éditer { pokemon.name }</h2>
                {/* On affiche le composant formulaire */}
                <PokemonForm pokemon={pokemon}></PokemonForm>
                <div className="center">
                    <Link to="/">Retour</Link>
                </div>
            </div>
        ) : (
            <h4 className="center">Aucun pokémon à afficher !</h4>
        )}
        </div>
    );
}

export default PokemonEdit;