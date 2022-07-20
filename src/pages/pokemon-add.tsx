import React, { FunctionComponent, useState } from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

const PokemonAdd: FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime()); // on genere un id unique mais quand on sera avec une vrai bdd alors pas besoin car sa sera une FK
    const [pokemon] = useState<Pokemon>(new Pokemon(id)); // on crée un nouveau pokemon avec l'id crée

    return (
        <div className="row">
            <h2 className='header center'>Ajouter</h2>
            {/* on met en place notre composant PokemonForm en lui passant notre pokemon vierge crée */}
            <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
        </div>
    )
}

export default PokemonAdd;