import React, { Component } from 'react';
class Login extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
    }
    login(){
        if (this.refs.user.value == "vexere" && this.refs.password.value == "vxr2019") {
          this.props.status('info');
          this.props.header();
      } else {
          document.querySelector('.title').innerHTML = "Sai Username or Password";
      }
      }
  render() {
    return (
        <div>
        <section id="login">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 ml-auto mr-auto">
                <div className="image"><i className="fas fa-camera" /></div>
                <div className="frame">
                  <p className="text-center title mx-5 text-white" />
                  <form>
                    <div className="input-group mb-3 input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text user">
                          <i className="fas fa-user" /></span>
                      </div>
                      <input ref="user" style={{border: '0px solid white'}} type="text" className="form-control username" placeholder="Username" />
                    </div>
                    <div className="input-group mb-3 input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text pass">
                          <i className="fas fa-lock" />
                        </span>
                      </div>
                      <input ref="password" style={{border: '0px solid white'}} type="password" className="form-control password" placeholder="Password" />
                    </div>
                  </form>
                  <button className="btn bg-primary login w-100 text-white mb-3" onClick={this.login}>LOGIN</button>
                  <div className="row">
                    <div className="col">
                      <input type="checkbox" defaultChecked />
                      <p className="d-inline">Remember me</p>
                    </div>
                    <div className="col">
                      <p>Forgot Password?</p>
                    </div>
                  </div>
                </div>
                <div className="copyright">
                  <p className="copytext">Copyright © 2018 Your Brand Name, Inc</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="row">
            <div className="col-sm-6">
              <p className="left">Vector<strong>Stock</strong></p>
            </div>
            <div className="col-sm-6">
              <p className="right">VectorStock.com/14515044</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Login;
