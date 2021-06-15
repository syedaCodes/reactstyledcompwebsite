import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';

const App = () => {

    return (
        <BrowserRouter basename="/finch">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={Signin} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
