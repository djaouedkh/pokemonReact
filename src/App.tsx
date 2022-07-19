import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

const App: FunctionComponent = () => {
    
    return (
        <Router>
            <div>
                {/* la barnav se trouvera sur tte les pages */}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo cener">Pokedex</Link>
                    </div>
                </nav>
                {/* routes de l'application */}
                <Switch>
                    <Route exact path="/" component={PokemonList}></Route>
                    <Route exact path="/pokemons" component={PokemonList}></Route>
                    <Route exact path="/pokemons/edit/:id" component={PokemonEdit}></Route>
                    <Route exact path="/pokemons/:id" component={PokemonDetail}></Route>
                    {/* Doit se placer à la fin pour intercepter les routes qui n'existent pas et afficher la page not found */}
                    <Route component={PageNotFound}></Route>
                </Switch>
            </div>
        </Router>
    )
}
  
export default App;

// minute tuto 4.30 !