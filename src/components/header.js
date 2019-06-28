import React, { Component } from 'react';

class Header extends Component {
    onClick(){
        this.props.header();
        this.props.status("login");
    }
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">JSReact</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav  mt-2 mt-lg-0 ml-auto">
                            <li className="nav-item">
                                <a className="nav-link">Hi, Admin</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={this.onClick.bind(this)} className="nav-link" id="header">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;