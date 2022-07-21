import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';
  
// component: c'est le composant qui se trouve dans chaque Route du Switch, ex: PokemonList
// ...rest: objet contenant les props de chaque Route du Switch, ex: {exact: true, path: '/'}
const PrivateRoute = ({ component: Component, ...rest }: any) => (
    // render: fonction qui permet de checker si user connecté et auquel cas de return le composant ou de rediriger vers login
    <Route {...rest} render={(props) => {
        const isAuthenticated = AuthenticationService.isAuthenticated; // on demande à notre service si l'user est connecté
        // pas connecté
        if (!isAuthenticated) {    
            return <Redirect to={{ pathname: '/login' }} />
        }
  
        // user connecté, on redirige vers le composant demandé
        return <Component {...props} />
    }} />
);
  
export default PrivateRoute;