import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import './index.css';

const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={Signin} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
