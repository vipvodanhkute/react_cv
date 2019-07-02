import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={toggle:true}
    }
    onClick(){
        this.props.logout();
        this.props.history.push('/');
    }
    onButton=()=>{
        this.setState({toggle:!this.state.toggle})
        if(this.state.toggle){
            document.querySelector('.item').style.display='block';
        }else{
            document.querySelector('.item').style.display='none';
        }
    }
    render() {
        return (
            <div className="menu">
                <a style={{fontSize:"50px",color:"red"}}>Riot</a>
                <div className="sub-menu">
                <button className="button" onClick={this.onButton}><i className="fas fa-align-justify"></i></button>
                {this.props.status?"":<ul className="item">
                    <li><a>LeeSin</a></li>
                   <li><a onClick={this.onClick.bind(this)} style={{cursor:"pointer"}}>Logout</a></li>
                </ul>
                }
                </div>
            </div>
            // <div className="container">
            //     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            //         <a className="navbar-brand" href="#">JSReact</a>
            //         <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            //             aria-expanded="false" aria-label="Toggle navigation"></button>
            //         <div className="collapse navbar-collapse" id="collapsibleNavId">
            //             <ul className="navbar-nav  mt-2 mt-lg-0 ml-auto">
            //                 <li className="nav-item">
            //                     {this.props.status?"":<a className="nav-link">Hi, Admin</a>}
            //                 </li>
            //                 <li className="nav-item">
            //                 {this.props.status?"":<a onClick={this.onClick.bind(this)} className="nav-link" id="header">Logout</a>}
            //                 </li>
            //             </ul>
            //         </div>
            //     </nav>
            // </div>

        );
    }
}

export default Header;