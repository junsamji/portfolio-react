import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Animated} from 'react-animated-css';
import './App.css';
import Header from './Header';
import { Home, About, Sub } from './';

function App() {
  const [text, setText] = useState("Portfolio");

  return (
    <div>
      <Router basename="/portfolio-react">
        {/*<Header />*/}
      <div className="sticky">
        <Animated animationIn="bounceInLeft" animationOUt="fadeOut" isVisible={true}>
          <div>
              <span className="App-header">
                  <span className="App-content">{text}</span>                    
                  {/*<span className='App-menu'><img src={menu} alt="menu" /></span>*/}
              </span>
          </div>
        </Animated>

        <Animated animationIn="bounceInRight" animationOUt="fadeOut" isVisible={true}>
          <div className="sticky">
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
          </div>
        </Animated>
      </div>

      <div>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/sub' component={Sub}/>  
      </div>
      </Router>
    </div>
  );
}

export default App;
