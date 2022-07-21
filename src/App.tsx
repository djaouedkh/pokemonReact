import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => {
    
    return (
        <Router>
            <div>
                {/* la barnav se trouvera sur tte les pages */}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokedex</Link>
                    </div>
                </nav>
                {/* routes de l'application */}
                <Switch>
                    <PrivateRoute exact path="/" component={PokemonList}/>
                    <Route exact path="/login" component={Login}/>
                    <PrivateRoute exact path="/pokemons" component={PokemonList}/>
                    <PrivateRoute exact path="/pokemon/add" component={PokemonAdd}/>
                    <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit}/>
                    <PrivateRoute exact path="/pokemons/:id" component={PokemonDetail}/>
                    {/* Doit se placer à la fin pour intercepter les routes qui n'existent pas et afficher la page not found */}
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    )
}
  
export default App;

// minute tuto 5.31 !