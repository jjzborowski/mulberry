import * as React from 'react';
import { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Menu/>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={ Home }
                        />
                        <Route
                            path="/contact/"
                            component={ Contact }
                        />
                        <Route component={ NotFound }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
