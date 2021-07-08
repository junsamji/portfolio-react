import React, { Component } from 'react';
import './App.css';
import menu from './assets/menu.png'

class Header extends Component {
    render() {
        return (
            <div>
                <span className='App-header'>
                    <span className='App-content'>REACT</span>
                    <span className='App-menu'><img src={menu} alt="menu" /></span>
                </span>
            </div>
        );
    }
}

export default Header;