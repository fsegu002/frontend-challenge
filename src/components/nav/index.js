import React, { Component } from 'react';
import './style.css'
import logo from './hhh_logo.png'

class Nav extends Component {
    render() {
        return (
            <nav >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-8 offset-md-2">
                            <div className="navTitle">
                                <img src={logo} alt="HHH logo" />
                                <h4>Front End Challenge</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;