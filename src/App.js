import React, { Component } from 'react';
import Login from './components/login';
import Info from './components/info';
import Javascript from './components/javascript';
import Header from './components/header';
import '../public/css/style.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isLogin:'login',
      isHeader:false
    }
    this.onStatus=this.onStatus.bind(this)
    this.isHeader=this.isHeader.bind(this)
  } 
  isHeader(){
    this.setState({isHeader:!this.state.isHeader})
  }
  onStatus(status){
    this.setState({isLogin:status})
  }
  onRender(){
    switch(this.state.isLogin){
      case 'login':
        return <Login status={this.onStatus} header={this.isHeader}/>
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
        {this.state.isHeader?<Header header={this.isHeader} status={this.onStatus}/>:''}
         {this.onRender()}
      </div>
    );
  }
}

export default App;
