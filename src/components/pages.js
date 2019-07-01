import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Pages extends Component {
    render() {
        return (
            <div className="container">
                <div className="nav">
                    <li className="nav-item">
                        <Link to="/pages/info" className="nav-link">
                            Trang CV
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/pages/bt" className="nav-link">
                            Trang Bài Tập
                        </Link>
                        </li>
                </div>
            </div>
        );
    }
}

export default Pages;