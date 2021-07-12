import React from 'react';
import './Sub.css';
import Covid from '../components/Covid';

class Sub extends React.Component {
    render() {
        return(
        <div>
          <header className="header">
            <h1>COVID-19</h1>
            <select>
                <option>국내</option>
                <option>세계</option>
            </select>
          </header>
          <Covid />
        </div>
        );
    }
}

export default Sub;