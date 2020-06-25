import React, { Component } from 'react'
import logo from '../assets/img/logo-og-600x350.jpg';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="logo" >
                    <img src={logo} className="logo" alt="logo"></img>
                </div>
                This is Sidebar
            </div>
        )
    }
}
