import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import './index.css';

const App = () => {

    return (
        <Router basename="/finch">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={Signin} exact />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
