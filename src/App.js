import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={Signin} exact />
            </Switch>
        </Router>
    )
}

export default App;
