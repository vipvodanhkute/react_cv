import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/login';
import Info from './components/info';
import Javascript from './components/javascript';
import Header from './components/header';
import Pages from './components/pages';
import '../public/css/style.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginAsGuest:false
    }
  }
  loginAsGuest(){
    this.setState({
      loginAsGuest:true
    })
  }
  logout(){
    this.state={
      loginAsGuest:false
    }
  }
  render() {
    return (
      <Router>
        <Route path="/" exact render={props=><Login {...props} loginAsGuest={this.loginAsGuest.bind(this)} />} />
        <Route path="/pages" render={props=><Header {...props} logout={this.logout.bind(this)} status={this.state.loginAsGuest}/>} />
        <Route path="/pages" exact component={Pages} />
        <Route path="/pages/info" component={Info} />
        <Route path="/pages/bt" component={Javascript} />
      </Router>
    );
  }
}

export default App;
