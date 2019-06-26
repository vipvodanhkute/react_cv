import React, { Component } from 'react';
import Login from './components/login';
import Info from './components/info';
import Javascript from './components/javascript';
import '../public/css/style.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isLogin:'loginn'
    }
    this.onStatus=this.onStatus.bind(this)
  } 
  onStatus(status){
    this.setState({isLogin:status})
  }
  onRender(){
    switch(this.state.isLogin){
      case 'login':
        return <Login status={this.onStatus}/>
        break;
      case 'info':
        return <Info status={this.onStatus}/>
        break;
      default :
        return <Javascript status={this.onStatus}/>
        break;
    }
  }
  render() {
    return (
      <div>
         {this.onRender()}
      </div>
    );
  }
}

export default App;
