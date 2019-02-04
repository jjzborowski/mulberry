import * as React from 'react';
import { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/contact/">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contact/" component={Contact}/>
                </div>
            </Router>
        );
    }
}

export default App;
