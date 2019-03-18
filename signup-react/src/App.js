import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={SignIn}/>
                    <Route path="/register" component={SignUp}/>
                </div>
            </Router>
        );
    }
}

export default App;
