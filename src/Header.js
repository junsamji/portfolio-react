import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import './App.css';
/*import menu from './assets/menu.png'*/

class Header extends Component {
    render() {
        return (
            <div>
            <Animated animationIn="bounceInLeft" animationOUt="fadeOut" isVisible={true}>
            <div>
                <span className="App-header">
                    <span className="App-content">REACT</span>                    
                    {/*<span className='App-menu'><img src={menu} alt="menu" /></span>*/}
                </span>
            </div>
            </Animated>
            </div>
        );
    }
}

export default Header;