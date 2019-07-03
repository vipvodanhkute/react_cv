import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={toggle:true}
    }
    onClick(){
        this.props.history.push('/');
    }
    onButton=()=>{
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        return (
            <div className="menu">
                {this.props.status?"":<button className="button" onClick={this.onButton}><i className="fas fa-align-justify"></i></button>}
                {this.props.status?"":<ul className={this.state.toggle? '':'mobile '} >
                    <li><a>LeeSin</a></li>
                   <li><a onClick={this.onClick.bind(this)} style={{cursor:"pointer"}}>Logout</a></li>
                </ul>
                }
            </div>

        );
    }
}
const mapsTopStore=(state)=>{
    return {
    status:state.loginAsGuest
    }
}
export default connect(mapsTopStore)(Header);