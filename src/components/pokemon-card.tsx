import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon'; // on importe la class pour verifier le type de l'argument quand recevra
import './pokemon-card.css';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import { useHistory } from 'react-router-dom'
 
// on indique à typescript que le composant qui utilisera le type Props devra posseder des props du meme nom et du mm type que défini, exemple la props doit se nommer pokemon et devra etre un objet de type Pokemon
type Props = {
    pokemon: Pokemon,
    background?: string // ? permet de rendre cette props optionnel et donc notre composant n'est pas obligé de l'avoir, dans le composant si on lui envoie une props qui se nomme background alors il l'utilisera sinon on peut définir une valeur par défaut
};

// on passe au composant un argument et on utilisera cet argument pour extraire ses infos et les afficher
const PokemonCard: FunctionComponent<Props> = ({pokemon, background = 'white'}) => { 
    
    const [color, setColor] = useState<string>(); // initialise la color

    // useHistory est un hook qui permet de naviguer vers une url, pareil qu'un Link ou Redirect, le useHistory possèden néanmoins l'historique du navigateur au besoin
    const history = useHistory();

    const showBackground = () => {
        setColor(background) // survol: modifie la color avec la props background
    }

    const hideBackground = () => {
        setColor('antiquewhite'); // quitte survol: met cette color
    }

    const goToPokemon = (id: number) => {
        history.push(`/pokemons/${id}`);
    }

    return (
        <div className="col s6 m4" onClick={ () => goToPokemon(pokemon.id)} onMouseEnter={showBackground} onMouseLeave={hideBackground}>
            <div className="card horizontal" style={{background: color}}>
            <div className="card-image"> 
                <img src={pokemon.picture} alt={pokemon.name}/>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p>{pokemon.name}</p>
                    <p><small>{formatDate(pokemon.created)}</small></p>
                    {/* <p><small>{pokemon.created.toString()}</small></p> */}
                    {pokemon.types.map(type => (
                        <span key={type} className={formatType(type)}>{type}</span> // className pour utiliser materialize
                    ))}
                </div>
            </div>
            </div> 
        </div>
    );
}
  
export default PokemonCard;