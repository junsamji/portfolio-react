import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Home, About, Sub } from './';

function App() {
  return (
    <Router>
      <div>
        <span className='App-header'>
            <span className='App-content'>
              <Link to="/">Home</Link>
            </span>
            
            <span className='App-content'>
              <Link to="/about">Map</Link>
            </span>
           
            <span className='App-content'>
              <Link to="/sub">Sub</Link>
            </span>
        </span>   
          

        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/sub' component={Sub}/>
      </div>
    </Router>
  );
}

export default App;
