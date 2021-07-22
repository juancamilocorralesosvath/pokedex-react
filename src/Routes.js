import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Cards from './views/Cards';
import Individual from './views/Individual';
export default function Routes({pokeResult}) {
    return(
        <Router>
            <Switch>
                <Route exact path='/pokemons/:idPokemon' component={Individual} />
                <Route exact path='/'>
                    <Cards pokeResult={pokeResult}  />
                </Route>
            </Switch>
        </Router>
    )
}