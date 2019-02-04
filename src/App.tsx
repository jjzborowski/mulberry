import * as React from 'react';
import {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './App.scss';
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
