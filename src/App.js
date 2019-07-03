import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
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
      <Provider store={store}>
      <Router>
        <Route path="/" exact component={Login}/>
        <Route path="/pages" component={Header} />
        <Route path="/pages" exact component={Pages} />
        <Route path="/pages/info" component={Info}/>
        <Route path="/pages/bt" component={Javascript}/>
      </Router>
      </Provider>
    );
  }
}

export default App;
var stateDefault={
  loginAsGuest:false,
}
const reducer=(state=stateDefault,action)=>{
  switch(action.type){
    case 'loginAsGuest':
      return {...state,loginAsGuest:!state.loginAsGuest}
  }
  return state;

}
const store=createStore(reducer);