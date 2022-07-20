import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
// import POKEMONS from '../models/mock-pokemon';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import Loader from '../components/loader';
import PokemonService from '../services/pokemon-service';

type Params = { id: string }; // defini un type nommé Params qui correspondra à l'id du pokemon dans l'url

// Quand un composant a besoin de params alors il devra posseder RouteComponentProps<Params>
// RouteComponentProps: permet de typer le paramètre recu depuis le routeur
// match: contient toutes les données passé par le routeur, exemple: un id passé par l'url sera contenu dans match.params.id
const PokemonDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
    const [pokemon, setPokemon] = useState<Pokemon|null>(null); // la variable est soit un pokemon soit null, et on l'initialise à null

    // Hook d'effet qui permet de modifier la valeur de la variable pokemon via l'url passé en paramètre
    useEffect(() => {
        // +mat.. : le + sert à transformer une string en int, car comme le params vien de l'url c'est donc une string
        PokemonService.getPokemon(+match.params.id).then(pokemon => setPokemon(pokemon));
    }, [match.params.id]);
    
    return (
        <div>
        { pokemon ? (
            <div className="row">
                <div className="col s12 m8 offset-m2"> 
                    <h2 className="header center">{ pokemon.name }</h2>
                    <div className="card hoverable"> 
                        <div className="card-image">
                            <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                            <Link to={`/pokemons/edit/${pokemon.id}`} className='btn btn-floating halfway-fab waves-effect waves-light'>
                                <i className='material-icons'>edit</i>
                            </Link>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <table className="bordered striped">
                                    <tbody>
                                        <tr> 
                                            <td>Nom</td> 
                                            <td><strong>{ pokemon.name }</strong></td> 
                                        </tr>
                                        <tr> 
                                            <td>Points de vie</td> 
                                            <td><strong>{ pokemon.hp }</strong></td> 
                                        </tr> 
                                        <tr> 
                                            <td>Dégâts</td> 
                                            <td><strong>{ pokemon.cp }</strong></td> 
                                        </tr> 
                                        <tr> 
                                            <td>Types</td> 
                                            <td>
                                            {pokemon.types.map(type => (
                                            <span key={type} className={formatType(type)}>{type}</span>
                                            ))}</td> 
                                        </tr> 
                                        <tr> 
                                            <td>Date de création</td>
                                            <td>{formatDate()}</td> 
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-action">
                                <Link to="/">Retour</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <h4 className="center"><Loader /></h4>
        )}
        </div>
    );
}

export default PokemonDetail;