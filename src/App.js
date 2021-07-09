import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Animated} from 'react-animated-css';
import './App.css';
import Header from './Header';
import { Home, About, Sub } from './';

function App() {
  return (
    <Router>
      <Header/>
      <Animated animationIn="bounceInRight" animationOUt="fadeOut" isVisible={true}>
      <div>
        <span className='App-header'>
            <span className='App-content'>
              <Link to="/">Home</Link>
            </span>
            
            <span className='App-content'>
              <Link to="/about">Map</Link>
            </span>
           
            <span className='App-content'>
              <Link to="/sub">Corona</Link>
            </span>
        </span>   
          

        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/sub' component={Sub}/>  
      </div>
    </Animated>
    </Router>
  );
}

export default App;
