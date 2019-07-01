import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/login';
import Info from './components/info';
import Javascript from './components/javascript';
import Header from './components/header';
import '../public/css/style.css'
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Login} />
      </Router>
    );
  }
}

export default App;
